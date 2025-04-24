"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./HamburgerMenu.css";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import {
  useUser,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function HamburgerMenu({ userRole }) {
  const [resolvedUserRole, setResolvedUserRole] = useState(null);

  React.useEffect(() => {
    if (userRole instanceof Promise) {
      userRole.then((role) => setResolvedUserRole(role));
    } else {
      setResolvedUserRole(userRole);
    }
  }, [userRole]);

  console.log("userRole---->", resolvedUserRole);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { user, isSignedIn } = useUser(); // client-safe user data

  return (
    <div className="hamburger-wrapper">
      <button className="hamburger-btn" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate-top" : ""}`}></div>
        <div className={`bar ${isOpen ? "hide-middle" : ""}`}></div>
        <div className={`bar ${isOpen ? "rotate-bottom" : ""}`}></div>
      </button>

      {isOpen && (
        <nav className="mobile-menu">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/resources" onClick={toggleMenu}>
            Resources
          </Link>
          <Link href="/events" onClick={toggleMenu}>
            Events
          </Link>

          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <div className="signIn-hamburger">
            <SignedIn>
              {/* <span>
                Welcome {user?.firstName} {user?.lastName}
              </span> */}
              {/* <UserButton /> */}
              <button className="joinUs-hamburger">
                <Link href="/users" onClick={toggleMenu}>
                  Join us
                </Link>
              </button>
              {resolvedUserRole === "Admin" && (
                <Link href="/admin" onClick={toggleMenu}>
                  Admin
                </Link>
              )}
              <SignOutButton onClick={toggleMenu} />
            </SignedIn>
            <SignedOut>
              <SignInButton onClick={toggleMenu} />
            </SignedOut>
          </div>
        </nav>
      )}
    </div>
  );
}
