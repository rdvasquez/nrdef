import { pool } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UserRegistrationForm() {
  console.log("currUser");
  const currUser = await currentUser();

  console.log(currUser);
  //   const userRecord = await pool.query(
  //     `SELECT id from user_info where clerk_id=$1`,
  //     [currUser.id]
  //   );
  //   const userId = userRecord.rows[0].id;

  async function handleSubmit(formData) {
    "use server";

    //Get data from the form

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    const addressline1 = formData.get("addressline1");
    const addressline2 = formData.get("addressline2");
    const postcode = formData.get("postcode");
    const phonenumber = formData.get("phonenumber");
  }
  return (
    <>
      <form action={handleSubmit}>
        <fieldset>
          <legend>User details</legend>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            required
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </fieldset>
        <fieldset>
          <legend>Contact information</legend>
          <label htmlFor="addressline1">Address line no:1</label>
          <input
            type="text"
            name="addressline1"
            id="addressline1"
            placeholder="Address line 1"
            required
          />
          <label htmlFor="addressline2">Address line no:2</label>
          <input
            type="text"
            name="addressline2"
            id="addressline2"
            placeholder="Address line 2"
            required
          />
          <label htmlFor="postcode">Post Code:</label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Post Code"
            required
          />
          <label htmlFor="phonenumber">Phone number:</label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            placeholder="Phone number"
            required
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
