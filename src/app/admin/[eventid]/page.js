import AdditionalTimings from "@/components/AdditionalTiming";
import AdditionalTimingsForEdit from "@/components/AdditionalTimingsForEdit";
import EditEventForm from "@/components/EditEventForm";
import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditEventPage({ params }) {
  const { eventid } = await params;
  const [selectedId] = await pool.query(`SELECT * FROM Events where id = ?`, [
    eventid,
  ]);
  console.log("selectedId----->" + selectedId[0].title);
  const [timingsInfo] = await pool.query(
    `select * from Event_timings where event_id = ?`,
    [eventid]
  );
  const timing = timingsInfo[0];

  console.log("timingsInfo1----->" + timing.time);
  console.log("timingsInfo----->" + timingsInfo[0].time);

  return (
    <div>
      <h1>Edit event</h1>
      <form action={handleEditEvent}>
        <EditEventForm eventData={selectedId[0]} timingsInfo={timingsInfo} />
        <input type="text" id="eventId" name="eventId" value={eventid} hidden />

        <AdditionalTimingsForEdit numberRecords={timingsInfo.length} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

async function handleEditEvent(formData) {
  "use server";
  const title = formData.get("title");
  const description = formData.get("description");
  const eventId = formData.get("eventId");
  const [editedEvent] = await pool.query(
    `UPDATE Events SET title = ?, description = ? WHERE id = ?`,
    [title, description, eventId]
  );
  //Delete all the timings for the event
  await pool.query(`DELETE FROM Event_timings WHERE event_id = ?`, [eventId]);

  const dummyOldRecords = formData.getAll("dummyOldRecords");
  console.log("dummyOldRecords--->" + dummyOldRecords);
  dummyOldRecords.forEach(async (_, index) => {
    let datetime = new Date(
      `${formData.get(`date-${index}`)}T${formData.get(`time-${index}`)}`
    )
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    console.log("datetime-->" + datetime);
    await pool.query(
      `INSERT INTO Event_timings(event_id, time, venue) VALUES(?,?,?)`,
      [eventId, datetime, formData.get(`venue-${index}`)]
    );
  });
  //Insert the new timings
  const dummy = formData.getAll("dummy");
  console.log("dummy--->" + dummy);
  dummy.forEach(async (_, index) => {
    let datetime = new Date(
      `${formData.get(`date${index}`)}T${formData.get(`time${index}`)}`
    )
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    console.log("datetime-->" + datetime);
    await pool.query(
      `INSERT INTO Event_timings(event_id, time, venue) VALUES(?,?,?)`,
      [eventId, datetime, formData.get(`venue${index}`)]
    );
  });
  console.log(editedEvent);
  revalidatePath(`/admin/${eventId}`);
  redirect(`/admin/${eventId}`);
}

async function DeleteEventTimings(formData) {
  "use server";
  const eventId = formData.get("eventId");
  await pool.query(`DELETE FROM Event_timings WHERE event_id = ?`, [eventId]);
  revalidatePath(`/admin/${eventId}`);
  redirect(`/admin/${eventId}`);
}
async function AddNewEventTimings(formData) {
  "use server";
  const editEventId = formData.get("editEventId");
  const dummy = formData.getAll("dummy");
  console.log(dummy);
  dummy.forEach(async (_, index) => {
    let datetime = new Date(
      `${formData.get(`date${index}`)}T${formData.get(`time${index}`)}`
    )
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    console.log("datetime-->" + datetime);
    await pool.query(
      `INSERT INTO Event_timings(event_id, time, venue) VALUES(?,?,?)`,
      [eventId, datetime, formData.get(`venue${index}`)]
    );
  });
  revalidatePath(`/admin/${eventId}`);
  redirect(`/admin/${eventId}`);
}
