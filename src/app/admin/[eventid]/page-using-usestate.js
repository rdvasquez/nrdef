import EditEventForm from "@/components/EditEventForm";
import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditEventPage = ({ params }) => {
  const { eventid } = async () => await params;
  const [eventTimings, setEventTimings] = useState("");
  const [events, setEvents] = useState("");

  const fetchEvents = async () => {
    try {
      const [event] = await pool.query("SELECT * FROM Events where id = ?", [
        eventid,
      ]);
      setEvents(event); // Adjust according to your query result structure
    } catch (error) {
      console.error("Database query error:", error);
    }
  };

  // Effect to fetch data when childValue changes
  useEffect(() => {
    fetchEvents();
  });

  // Function to perform the database query
  // const fetchData = async () => {
  //   try {
  //     const [eventInfo] = await pool.query(
  //       "select * from Event_timings where event_id = ?",
  //       [eventid]
  //     );
  //     setEventTimings(eventInfo); // Adjust according to your query result structure
  //   } catch (error) {
  //     console.error("Database query error:", error);
  //   }
  // };

  // Effect to fetch data when childValue changes
  // useEffect(() => {
  //   fetchData();
  // });

  return (
    <div>
      <h1>Edit event</h1>
      <form action={handleEditEvent}>
        <EditEventForm eventData={events[0]} />
        <input type="text" id="eventId" name="eventId" value={eventid} hidden />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEventPage;
// export default async function EditEventPage({ params }) {
//   const { eventid } = await params;
//   const [selectedId] = await pool.query(
//     `SELECT * FROM Events    where id = ?`,
//     [eventid]
//   );

//   return (
//     <div>
//       <h1>Edit event</h1>
//       <form action={handleEditEvent}>
//         <EditEventForm eventData={selectedId[0]} />
//         <input type="text" id="eventId" name="eventId" value={eventid} hidden />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

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
  const dummy = formData.getAll("dummy");
  dummy.map(async (_, index) => {
    let datetime = new Date(
      `${formData.get(`date${index}`)}T${formData.get(`time${index}`)}`
    )
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    console.log("datetime-->" + datetime);
    await pool.query(
      `UPDATE Event_timings SET time = ?, venue = ? WHERE event_id = ?`,
      [datetime, formData.get(`venue${index}`), eventId]
    );
  });
  revalidatePath("/admin");
  redirect("/admin");
}
