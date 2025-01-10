import { pool } from "@/lib/db";
import styles from "./singleeventpage.module.css";
import SelectDateTime from "@/components/SelectDateTime.jsx";
import { revalidatePath } from "next/cache";

export default async function SingleEventPage({ params }) {
  console.log("eventid-->" + params.eventid);

  const parts = params.eventid.split("-");
  console.log("parts-->" + parts);
  try {
    const [eventDetails] = await pool.query(
      `SELECT id, time, venue FROM Event_timings where event_id = ?`,
      [parts[0]]
    );
    console.log("resultsArray-->" + eventDetails);
    console.log("results-->" + JSON.stringify(eventDetails, null, 2));

    return (
      <div>
        <h1>{decodeURIComponent(parts[1])}</h1>
        {eventDetails.map((eventDetail) => {
          console.log(eventDetail);
          const dateAndTime = eventDetail.time.toLocaleString();
          const formattedDate = eventDetail.time.toLocaleDateString("en-GB");
          const formattedTime = eventDetail.time.toLocaleTimeString();
          return (
            <div key={eventDetail.id}>
              <h4>Location:{eventDetail.venue}</h4>
              {/* {dateAndTime} */}
              <p>Date: {formattedDate}</p>
              <p>Time: {formattedTime}</p>
            </div>
          );
        })}
        <div>
          <form action={formSubmit}>
            <fieldset>
              <legend>Event Registration</legend>
              <div className={styles.registrationForm}>
                {/* <label htmlFor="title">
                  <span>Title: </span>
                  <strong>
                    <span aria-label="required">*</span>
                  </strong>
                </label>
                <select name="title" id="title" required>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </select> */}
                <label htmlFor="firstname">
                  <span>First Name: </span>
                  <strong>
                    <span aria-label="required">*</span>
                  </strong>
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  required
                />
                <label htmlFor="lastname">Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your last name"
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email address"
                  required
                />
                <SelectDateTime eventDetails={eventDetails} />
                <label>Select diet</label>
                <label>
                  <input type="radio" name="dietoption" value="Vegetarian" />{" "}
                  Vegetarian
                </label>
                <label>
                  <input
                    type="radio"
                    name="dietoption"
                    value="Non-vegetarian"
                  />{" "}
                  Non-vegetarian
                </label>
                <label>
                  <input type="radio" name="dietoption" value="Vegan" /> Vegan
                </label>
              </div>
            </fieldset>
            <div>
              <input
                type="text"
                name="eventname"
                value={decodeURIComponent(parts[1])}
                hidden
              />
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching event details:", error);
  }
}
async function formSubmit(formData) {
  "use server";
  console.log("formSubmit");
  console.log(formData);

  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const email = formData.get("email");
  const eventName = formData.get("eventname");
  const dateTime = formData.get("eventDetail").split("-")[0];
  const date = new Date(dateTime);
  const formattedDateTime = date.toISOString().slice(0, 19).replace("T", " ");
  const venue = formData.get("venue");
  const dietOption = formData.get("dietoption");

  const registeredUserRecord = await pool.query(
    `INSERT INTO Event_registration(firstname, lastname, email, event, datetime, venue, diet) VALUES(?,?,?,?,?,?,?)`,
    [
      firstName,
      lastName,
      email,
      eventName,
      formattedDateTime,
      venue,
      dietOption,
    ]
  );
  await sendConfirmationEmail(email, eventName, formattedDateTime, venue);
}
//If the user is logged in, the event registration form to be populated with the user's details from the properties of CurrentUser() from Clerk. Otherwise, the user can register as a guest.

// Code to send an email to the user after successful registration
async function sendConfirmationEmail(
  email,
  eventName,
  formattedDateTime,
  venue
) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "norwichdef@gmail.com",
      pass: "t.72f@74C2FtQSF",
    },
  });

  let mailOptions = {
    from: "norwichdef@gmail.com",
    to: email,
    subject: "Event Registration Confirmation",
    html: `
      <h1>Registration Successful</h1>
      <p>Dear ${email},</p>
      <p>Thank you for registering for the event: <strong>${eventName}</strong>.</p>
      <p>Here are the details of the event:</p>
      <ul>
        <li><strong>Date and Time:</strong> ${formattedDateTime}</li>
        <li><strong>Venue:</strong> ${venue}</li>
      </ul>
      <p>We look forward to seeing you at the event.</p>
      <p>Best regards,</p>
      <p>The Event Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
}

//await sendConfirmationEmail(email, eventName, formattedDateTime, venue);
