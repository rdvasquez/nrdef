import { pool } from "@/lib/db";
import "./Contact.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ContactForm() {
  async function handleSubmit(formData) {
    "use server";
    //Get data from the form
    const guestName = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    //Insert data into the database
    const [newGuest] = await pool.query(
      `INSERT INTO Contacting_users(name, email, message) VALUES(?,?,?)`,
      [guestName, email, message]
    );
    console.log("newUser------>" + newGuest);
    //Notify admin about the new user
    await notifyAdminEmail(guestName, email, message);
    //Redirect to home page after submission
    revalidatePath("/");
    redirect("/");
  }
  async function notifyAdminEmail(guestName, email, message) {
    // Code to send an email to the admin about the new user
    console.log("New message from guest:", guestName, email, message);
  }
  // Function to send an email to the user after successful registration
  return (
    <div className="contact-container">
      <h4 className="title-words">Get in touch</h4>
      <p className="invite-text">
        Join our network and explore your faith journey
      </p>

      <div className="contact-form">
        <form action={handleSubmit}>
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
