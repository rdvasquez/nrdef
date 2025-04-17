"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

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
        </nav>
      )}
    </div>
  );
}
