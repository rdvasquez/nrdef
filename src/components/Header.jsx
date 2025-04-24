import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { pool } from "@/lib/db";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import IsAdmin from "./IsAdmin";
import HamburgerMenu from "./HamburgerMenu";

export default async function Header() {
  const user = await currentUser();
  console.log(user);
  return (
    <>
      <header className="header-container">
        <div className="header-grid"></div>
        <div className="header-logo">
          <Image
            className="logo"
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </div>

        <div className="header-verse">
          “How beautiful are the feet of those who bring good news.” Romans
          10:15
        </div>

        <div className="hamburger-only">
          <HamburgerMenu userRole={getRole()} />
        </div>

        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/events">Events</Link>

          <Link href="/contact">Contact</Link>

          <div className="signIn">
            <ClerkLoading>
              <span className="auth-placeholder">Loading...</span>
            </ClerkLoading>

            <ClerkLoaded>
              <SignedIn>
                <span>
                  Welcome {user?.firstName} {user?.lastName}
                </span>
                <UserButton />
                <SignOutButton />
                <button className="joinUs">
                  <Link className="joinUs" href="/users">
                    Join us
                  </Link>
                </button>
                <IsAdmin />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </ClerkLoaded>
          </div>
        </nav>
      </header>
    </>
  );
}
async function getRole() {
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
        console.log("User Role1-->" + userRole);
      });
    }
  } catch (err) {
    console.error("DB access error:", err);
  }

  return userRole;
}
