"use client";

import { useEffect } from "react";

export default function SuccessAfterReg() {
  useEffect(() => {
    alert(
      "Registration successful! A confirmation email has been sent to your email address."
    );
    window.location.href = "/events";
  }, []);
}
