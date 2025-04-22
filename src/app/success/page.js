"use client";

import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    alert("Thank you for registering with us.");
    window.location.href = "/";
  }, []);
}
