import { pool } from "@/lib/db";
//import { connection } from "@/lib/db";
import "./UserRegistration.css";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UserRegistrationForm() {
  const currUser = await currentUser();
  console.log("currUser-->" + currUser);

  let usersId = "";
  await pool.query(
    `SELECT * FROM Users WHERE clerk_id=?`,
    [currUser.id],
    function (err, results) {
      if (err) return callback(err);
      if (results.length == 0) {
        const userRecord = pool.query(
          `INSERT INTO Users(clerk_id, username) VALUES(?,?)`,
          [currUser.id, ""]
        );
      } else {
        usersId = results[0].id;
        console.log("usersId-->" + usersId);
      }
    }
  );
  //console.log("rows ->>" + rows.length);
  //const userId = rows[0].id;

  // const userRecord = await pool.query(
  //   `INSERT INTO Users(clerk_id,username) VALUES(?,?)`,
  //   [currUser.id, ""]
  // );

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

    //Insert data into the database table
    const userdetailsRecord = await pool.query(
      `INSERT INTO User_info(firstname, lastname, email, password, addressline1, addressline2, postcode,phonenumber) VALUES(?,?,?,?,?,?,?,?)`,
      [
        firstname,
        lastname,
        email,
        password,
        addressline1,
        addressline2,
        postcode,
        phonenumber,
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
          <legend>User details</legend>
          <div>
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
              placeholder="Enter your first Name"
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
          </div>
        </fieldset>

        <fieldset>
          <legend>Contact information</legend>
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
            <label htmlFor="addressline3">County</label>
            <input
              type="text"
              name="addressline3"
              id="addressline3"
              placeholder="Enter County"
              required
            />
            <label htmlFor="addressline4">Country</label>
            <input
              type="text"
              name="addressline4"
              id="addressline4"
              placeholder="Enter Country"
              required
            />
            <label htmlFor="postcode">Post Code:</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              pattern="[A-Za-z]{1,2}[0-9Rr]{1,2} ?[0-9][A-Za-z]{2}"
              placeholder="Enter Post Code"
              required
            />
            <label htmlFor="phonenumber">Phone number:</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter Phone number"
              required
            />
          </div>
        </fieldset>
        <div className="submit-button">
          <button className="userdetails-button">Submit</button>
        </div>
      </form>
    </>
  );
}
