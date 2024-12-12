import React from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <ClerkProvider>
      <header className="header">
        <div className="leftside-header">
          <Image
            className="logo"
            src="/logo.png"
            width={250}
            height={250}
            alt="logo"
          />
          <span>
            “How beautiful are the feet of those who bring good news” Romans
            10:15
          </span>
        </div>

        <nav className="center-header">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>

          <div className="signIn">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedIn>
              <SignOutButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <button className="button">Join us</button>
          </div>
        </nav>
      </header>
    </ClerkProvider>
  );
}
