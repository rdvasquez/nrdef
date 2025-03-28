import { pool } from "@/lib/db";
import "./Contact.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ContactForm() {
  return (
    <>
      <h2></h2>
      <p></p>
      <form>
        <div className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
