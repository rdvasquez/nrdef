"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function HeaderAuth({ user }) {
  return (
    <div className="signIn" style={{ minWidth: "250px" }}>
      <SignedIn>
        <span>
          Welcome {user?.firstName} {user?.lastName}
        </span>
        <UserButton />
        <SignOutButton />
        <button className="joinUs">
          <Link href="/users">Join us</Link>
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
