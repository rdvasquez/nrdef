import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Events</a>
            <a href="#">Resources</a>
            <a href="#">Contact</a>
          </nav>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
