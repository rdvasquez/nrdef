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
      <body>
        <header className="header">
          <div className="leftside-header">
            <Image
              className="logo"
              src="/logo.png"
              width={200}
              height={200}
              alt="logo"
            />
            <p>
              “How beautiful are the feet <br />
              of those who bring good news” <br />
              Romans 10:15
            </p>
          </div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <div className="clerkHeader">
          <div className="user-nav">
            <span>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </span>
          </div>
        </div>

        <div className="rightside_child">
          <div className="clerknav">
            <SignedIn>
              <SignOutButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </body>
    </ClerkProvider>
  );
}
