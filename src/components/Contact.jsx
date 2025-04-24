import { pool } from "@/lib/db";
import "./Contact.css";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

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
    notifyEmail(guestName, email, message);
    notifyEmailToGuest(guestName, email, message);
    //Redirect to home page after submission
    revalidatePath("/");
    redirect("/");
  }

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
            placeholder="Enter your message here"
            required
          ></textarea>
          <button className="contact-button">Send</button>
        </form>
      </div>
    </div>
  );
}
// Code to send an email to the admin about the new user message
// This function will be called after the form submission

function notifyEmail(guestName, email, message) {
  console.log("New message from guest:", guestName, email);

  //Import nodemailer
  //Configure the nodemailer transport

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Set up the email options

  let mailOptionsAdmin = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `New Message from ${guestName}`,
    html: `
      <p>Dear Admin,</p>
      <p>You have received a new message from a guest:</p>
      <ul>
        <li><strong>Name:</strong> ${guestName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong>${message}</li>
        </ul>
        <p><strong>This message needs your kind attention and response.</strong></p>
      <p>Thanks</p>
      
    `,
  };

  try {
    setTimeout(() => {
      transporter.sendMail(mailOptionsAdmin);
    }, 15000);
    console.log("Notification email sent to admin successfully");
  } catch (error) {
    console.error("Error sending notification email:", error);
  }
}

function notifyEmailToGuest(guestName, email, message) {
  //Import nodemailer
  //Configure the nodemailer transport

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Send a confirmation email to the guest
  let mailOptionsGuest = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Thank you for your message",
    html: `
        <p>Dear ${guestName},</p>
        <p>Thank you for reaching out to us. We appreciate your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>NRDEF Community Head</p>
      `,
  };
  try {
    setTimeout(() => {
      transporter.sendMail(mailOptionsGuest);
    }, 1000); // Adjust delay as needed

    console.log("Confirmation email sent to guest successfully");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
}
