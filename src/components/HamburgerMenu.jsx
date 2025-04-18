"use client";
import React, { useState } from "react";
import "./HamburgerMenu.css";
import Link from "next/link";

export default function NavbarBurger() {
  const [isOpen, setIsOpen] = useState(false);
  //Handles the opening and closing of the menu
  const toggleMenuHandleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <button onClick={toggleMenuHandleClick} className="hamburger">
        <span className={`burger-top ${isOpen ? "" : "top-close"}`}></span>
        <span
          className={`burger-middle ${isOpen ? "" : "middle-close"}`}
        ></span>
        <span
          className={`burger-bottom ${isOpen ? "" : "bottom-close"}`}
        ></span>
      </button>
      {!isOpen && (
        <nav className="navbarmenu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <div className="signIn">
            <Link href="/sign-in">Sign In</Link>
          </div>
        </nav>
      )}
    </>
  );
}

// This component is a hamburger menu that toggles the visibility of a navigation menu when clicked.
// It uses React's useState hook to manage the open/close state of the menu.
