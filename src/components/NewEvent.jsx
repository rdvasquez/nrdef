import { pool } from "@/lib/db";
import "./NewEvent.css";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function NewEvent() {
  async function AddEvent(formData) {
    "use server";
    let eventId;
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const time = formData.get("time");
    const venue = formData.get("venue");
    const datetime = new Date(`${date}T${time}`)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const [newEvents] = await pool.query(
      `INSERT INTO Events(title, description) VALUES(?,?)`,
      [title, description]
    );
    console.log(newEvents);

    eventId = newEvents.insertId;
    console.log("eventId ->>" + eventId);
    // {
    //   newEvents.map((newEvent) => {
    //     console.log("newEvent.id ->>" + newEvent.id);
    //   });
    // }
    const [newEventInfo] = await pool.query(
      `INSERT INTO Event_timings(event_id, time, venue) VALUES(?,?,?)`,
      [eventId, datetime, venue]
    );
    console.log(newEventInfo);
    revalidatePath("/admin");
    redirect("/admin");
  }
  //Event_timings.event_id = rows.insertId;
  return (
    <div>
      <div>
        <fieldset>
          <legend>New Event</legend>
          <form action={AddEvent} className="newEventForm">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />
            <label htmlFor="venue">Venue:</label>
            <input type="text" id="venue" name="venue" required />
            <button type="submit">Add Event</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
