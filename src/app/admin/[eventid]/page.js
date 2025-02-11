import AdditionalTimings from "@/components/AdditionalTiming";
import EditEventForm from "@/components/EditEventForm";
import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditEventPage({ params }) {
  const { eventid } = await params;
  const [selectedId] = await pool.query(
    `SELECT * FROM Events    where id = ?`,
    [eventid]
  );
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
        <AdditionalTimings />
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
  revalidatePath(`/admin/${eventId}`);
  redirect(`/admin/${eventId}`);
}
