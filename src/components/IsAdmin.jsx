"use server";

import { currentUser } from "@clerk/nextjs/server";
import { pool } from "@/lib/db";
import Link from "next/link";

export default async function IsAdmin() {
  const currUser = await currentUser();
  console.log("currUser123-->" + currUser.id);

  let userRole;
  try {
    const [rows] = await pool.query(`SELECT role FROM Users WHERE clerk_id=?`, [
      currUser.id,
    ]);
    console.log("ROWS-->" + rows);

    {
      rows.map((row) => {
        userRole = row.role;
        console.log("User Role-->" + userRole);
      });
    }
  } catch (err) {
    console.error("DB access error:", err);
  }
  if (userRole === "Admin") {
    return (
      <>
        <Link href="/admin">Admin</Link>
      </>
    );
  }
  return false;
}
//Upon clicking Admin, the user will be redirected to the admin page. The user will be able to see the admin page only if the user is an admin.
//The IsAdmin component is used in the Header component. The IsAdmin component checks if the user is an admin. If the user is an admin, the IsAdmin component will display the Admin link. If the user is not an admin, the IsAdmin component will not display the Admin link.

//Upon clicking Admin, all events need to be displayed. The events will be displayed in a table format. The table will have the following columns: Event ID, Event Name, Event Date, Event Time, Event Venue, and Event Description. The table will have the following buttons: Edit, Delete, and Add Event. The Edit button will allow the user to edit the event details. The Delete button will allow the user to delete the event. The Add Event button will allow the user to add a new event.

//Upon clicking a single event, the admin must be able to see all the registered guests for that event
//with an option to print the list of registered guests.

//The Admin page will have the following components: AdminHeader, AdminEvents, and AdminFooter. The AdminHeader component will display the header of the admin page. The AdminEvents component will display all the events in a table format. The AdminFooter component will display the footer of the admin page.

//The AdminHeader component will have the following components: AdminHeaderLogo, AdminHeaderTitle, and AdminHeaderLogout. The AdminHeaderLogo component will display the logo of the admin page. The AdminHeaderTitle component will display the title of the admin page. The AdminHeaderLogout component will allow the user to logout from the admin page.
