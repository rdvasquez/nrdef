import { pool } from "@/lib/db";
import "./UserRegistration.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

export default async function UserRegistrationForm() {
  const currUser = await currentUser();
  console.log("currUser-->" + currUser.id);
  if (currUser == null) {
    return <SignIn />;
  }
  console.log("123-->");
  //const promisePool = pool.promise();

  let userId = 0;
  try {
    const [rows] = await pool.query(`SELECT id FROM Users WHERE clerk_id=?`, [
      currUser.id,
    ]);
    {
      rows.map((row) => {
        userId = row.id;
        console.log("userId-->" + userId);
      });
    }
    if (rows.length === 0) {
      const [userRecord] = await pool.query(
        `INSERT INTO Users(clerk_id, username) VALUES(?,?)`,
        [currUser.id, ""]
      );
      userId = userRecord.insertId;
    }
  } catch (err) {}

  async function handleSubmit(formData) {
    "use server";

    //Get data from the form
    const title = formData.get("title");
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const phoneNumber = formData.get("phonenumber");
    console.log("phoneNumber-->" + phoneNumber);
    // const password = formData.get("password");
    const addressline1 = formData.get("addressline1");
    const addressline2 = formData.get("addressline2");
    const postCode = formData.get("postcode");
    const creationDate = new Date();
    const userId = formData.get("userId");

    //Insert data into the database table
    const userdetailsRecord = await pool.query(
      `INSERT INTO User_info(user_id,title, first_name, last_name, email, phone_number, address_line_1, address_line_2, postcode, creation_date) VALUES(?,?,?,?,?,?,?,?,?,?)`,
      [
        userId,
        title,
        firstName,
        lastName,
        email,
        phoneNumber,
        addressline1,
        addressline2,
        postCode,
        creationDate,
      ]
    );
    console.log("userdetailsRecord-->" + userdetailsRecord);
    revalidatePath("/users");
    //redirect to the user details page
    redirect("/users");
  }
  return (
    <>
      <form action={handleSubmit}>
        <fieldset>
          <legend class="caption">User details</legend>
          <div className="userinfo">
            <label htmlFor="title">
              <span>Title: </span>
              <strong>
                <span aria-label="required">*</span>
              </strong>
            </label>
            <select name="title" id="title" required>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>

            <label htmlFor="firstname">
              <span>First Name </span>
              <strong>
                <span aria-label="required">*</span>
              </strong>
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter your first Name"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter your last name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email address"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend class="caption">Contact information</legend>
          <div className="userinfo">
            <label htmlFor="addressline1">House/Apartment No.</label>
            <input
              type="text"
              name="addressline1"
              id="addressline1"
              placeholder="Enter House/Apartment No."
              required
            />
            <label htmlFor="addressline2">Town/City</label>
            <input
              type="text"
              name="addressline2"
              id="addressline2"
              placeholder="Enter Town/City"
              required
            />
            {/* <label htmlFor="addressline3">County</label>
            <input
              type="text"
              name="addressline3"
              id="addressline3"
              placeholder="Enter County"
              required
            /> */}
            {/* <label htmlFor="addressline4">Country</label>
            <input
              type="text"
              name="addressline4"
              id="addressline4"
              placeholder="Enter Country"
              required
            /> */}
            <label htmlFor="postcode">Post Code</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              pattern="[A-Za-z]{1,2}[0-9Rr]{1,2} ?[0-9][A-Za-z]{2}"
              placeholder="Enter Post Code"
              required
            />
            <label htmlFor="phonenumber">Phone number</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter Phone number"
              required
            />
            <input type="text" name="userId" value={userId} hidden readOnly />
          </div>
        </fieldset>
        <div className="submit-button">
          <button className="userdetails-button">Submit</button>
        </div>
      </form>
    </>
  );
}
