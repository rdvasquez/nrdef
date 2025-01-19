import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditEvent() {
  const [selectedId] = await pool.query(`SELECT * FROM Events`);

  async function handleEditEvent(formData) {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
    const eventId = formData.get("eventId");
    const [newEvents] = await pool.query(
      `UPDATE Events SET title = ?, description = ? WHERE id = ?`,
      [title, description, eventId]
    );
    console.log(newEvents);
    revalidatePath("/admin");
    redirect("/admin");
  }
  return (
    <div>
      <h1>Edit event</h1>
      <form action={handleEditEvent}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
