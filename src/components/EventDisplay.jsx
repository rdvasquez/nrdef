import { pool } from "@/lib/db";
import "./EventDisplay.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function EventDisplay() {
  console.log("EventInfo");
  try {
    const [events] = await pool.query(`SELECT * FROM Events`);
    console.log(events);
    return (
      <div>
        <div className="eventDisplayHeadingBox">
          <h3>Event</h3>
          <h3>Description</h3>
        </div>
        {events.map(function (event) {
          console.log(event);
          return (
            <div className="eventDisplayBox" key={event.id}>
              <Link href={`/events/${event.id}-${event.title}`}>
                {event.title}
              </Link>
              <span>{event.description}</span>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}
