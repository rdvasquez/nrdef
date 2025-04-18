import React from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
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
        <div className="headerimage">
          <Image
            className="header-image"
            src="/bible.webp"
            layout="fill"
            objectFit="cover"
            alt="fellowship"
          />
        </div>
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
          “How beautiful are the feet of those who bring good news.” <br />
          Romans 10:15 <br />
        </div>

        <div className="hamburger-only">
          <HamburgerMenu />
        </div>

        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <div className="signIn">
            <SignedIn>
              <IsAdmin></IsAdmin>
            </SignedIn>
            <SignedIn>
              <span>
                Welcome {user?.firstName} {user?.lastName}
              </span>
              <UserButton />
            </SignedIn>
            <SignedIn>
              <SignOutButton />
              <button className="joinUs">
                <Link href="/users">Join us</Link>
              </button>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </nav>
      </header>
    </>
  );
}
