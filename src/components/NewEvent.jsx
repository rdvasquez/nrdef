import { pool } from "@/lib/db";
import "./NewEvent.css";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AdditionalTimings from "./AdditionalTiming";

async function AddEvent(formData) {
  "use server";
  let eventId;
  const title = formData.get("title");
  const description = formData.get("description");

  const [newEvents] = await pool.query(
    `INSERT INTO Events(title, description) VALUES(?,?)`,
    [title, description]
  );
  console.log(newEvents);

  eventId = newEvents.insertId;
  console.log("eventId ->>" + eventId);
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

  revalidatePath("/admin");
  redirect("/admin");
}
export default function NewEvent() {
  return (
    <div>
      <form action={AddEvent}>
        <div className="NewEventContainer">
          <fieldset>
            <legend>New Event</legend>
            <div className="newEventForm">
              <label htmlFor="title">Event Title</label>
              <input type="text" id="title" name="title" required />
              <label htmlFor="description">Event Description</label>
              <input type="text" id="description" name="description" required />
              <div>
                <AdditionalTimings className="DetailsBox" />
              </div>
            </div>
          </fieldset>
        </div>
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
}
