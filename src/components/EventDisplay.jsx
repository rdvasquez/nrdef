import { pool } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import "./EventDisplay.css";
import Image from "next/image";

export default async function EventDisplay() {
  try {
    const [events] = await pool.query(`SELECT * FROM Events`);

    return (
      <section className="event-section">
        <header className="event-header">
          <h2>Upcoming Events</h2>
          <p>Join us and stay informed</p>
        </header>

        <div className="event-grid">
          {events.map((event) => (
            <article key={event.id} className="event-card">
              <Link
                href={`/events/${event.id}-${event.title}`}
                className="event-link"
              >
                <figure className="event-image-container">
                  <Image
                    src={`/events/${event.image_name || "bible-fellow.png"}`}
                    width={400}
                    height={250}
                    alt={`${event.title} image`}
                    className="event-image"
                  />
                  <figcaption className="sr-only">
                    {event.title} event image
                  </figcaption>
                </figure>

                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return <div className="error-message">Failed to load events.</div>;
  }
}
