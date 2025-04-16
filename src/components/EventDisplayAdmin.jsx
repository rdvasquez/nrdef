import { pool } from "@/lib/db";
import "./EventDisplayAdmin.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import NewEvent from "./NewEvent";

export default async function EventDisplayAdmin() {
  console.log("EventInfo");
  try {
    const [events] = await pool.query(`SELECT * FROM Events`);
    console.log(events);
    return (
      <div>
        <div className="eventDisplayHeadingBoxAdmin">
          <h3>Event</h3>
          <h3>Description</h3>
          <h3>Action</h3>
          <h3>Action</h3>
        </div>
        {events.map((event) => {
          console.log(event);
          return (
            <div className="eventDisplayBoxAdmin" key={event.id}>
              <Link href={`/events/${event.id}-${event.title}`}>
                {event.title}
              </Link>
              <span>{event.description}</span>
              <form action={EditEvent}>
                <button>Edit</button>
                <input type="hidden" name="editEventId" value={event.id} />
              </form>

              <form action={DeleteEvent}>
                <input type="hidden" name="eventId" value={event.id} />
                <button>Delete</button>
              </form>
            </div>
          );
        })}
        <NewEvent />
      </div>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}
async function DeleteEvent(formData) {
  "use server";
  const eventId = formData.get("eventId");
  await pool.query(`DELETE FROM Event_timings WHERE event_id = ?`, [eventId]);
  await pool.query(`DELETE FROM Events WHERE id = ?`, [eventId]);
  revalidatePath("/admin");
  redirect("/admin");
}
async function EditEvent(formData) {
  "use server";
  const editEventId = formData.get("editEventId");
  console.log("editEventId --->>>>>>>>>>>>>" + editEventId);
  revalidatePath(`/admin/${editEventId}`);
  redirect(`/admin/${editEventId}`);
}
