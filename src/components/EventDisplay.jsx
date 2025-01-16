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
        {events.map(function (event) {
          console.log(event);
          return (
            <div key={event.id}>
              <Link href={`/events/${event.id}-${event.title}`}>
                {event.title}
              </Link>
              <p>{event.description}</p>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}
