import { pool } from "@/lib/db";
import "./Contact.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ContactForm() {
  return (
    <div className="contact-container">
      <h4 className="title-words">Get in touch</h4>
      <p className="title-words">
        Join our network and explore your faith journey
      </p>
      <div className="contact-form">
        <form>
          <input
            className="contact-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="contact-input"
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
          <button className="contact-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
