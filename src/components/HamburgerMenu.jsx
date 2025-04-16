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
        {isOpen ? (
          <>
            <span className="burger-top"></span>
            <span className="burger-middle"></span>
            <span className="burger-bottom"></span>
            <nav className="navbar">
              <Link href="/">Home</Link>
            </nav>
          </>
        ) : (
          <>
            <span className="burger-top top-close "></span>
            <span className="burger-middle middle-close"></span>
            <span className="burger-bottom bottom-close"></span>
          </>
        )}
      </button>
    </>
  );
}

//   <nav className={`navbar ${isOpen ? "open" : ""}`}>
//     <ul>
//       <li>
//         <Link href="/">Home</Link>
//       </li>
//       <li>
//         <Link href="/about">About</Link>
//       </li>
//       <li>
//         <Link href="/resources">Resources</Link>
//       </li>
//       <li>
//         <Link href="/events">Events</Link>
//       </li>
//       <li>
//         <Link href="/contact">Contact</Link>
//       </li>
//     </ul>
//     <div className="signIn">
//       <Link href="/sign-in">Sign In</Link>
//       </nav
// }
