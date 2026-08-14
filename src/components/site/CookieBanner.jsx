"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(() => {
    try {
      return !localStorage.getItem("cookieConsent");
    } catch {
      return true;
    }
  });

  const dismiss = (accepted) => {
    try {
      localStorage.setItem("cookieConsent", accepted ? "accepted" : "rejected");
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-[9999] w-full sm:bottom-6 sm:left-auto sm:right-6 sm:w-[310px] rounded-t-2xl sm:rounded-2xl bg-white p-4 sm:p-5 text-[#273038] shadow-xl">
      <button
        type="button"
        onClick={() => dismiss(false)}
        className="absolute right-3 top-2 text-[#7f8990]"
        aria-label="Close cookie banner"
      >
        ✕
      </button>

      <h3 className="text-sm sm:text-base font-semibold">Our website uses cookies</h3>
      <p className="mt-2 text-xs leading-5 text-[#738089]">
        Our website uses cookies. By continuing, we assume your permission to
        deploy cookies as detailed in our{" "}
        <Link href="/privacy" className="underline hover:text-[#1f676d]">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline hover:text-[#1f676d]">
          Terms of Service
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => dismiss(false)}
          className="w-full sm:w-auto rounded-md px-3 py-2 text-xs text-[#58636c]"
        >
          Reject All
        </button>
        <button
          type="button"
          onClick={() => dismiss(true)}
          className="w-full sm:w-auto rounded-md bg-[#1a6268] px-4 py-2 text-xs font-medium text-white"
        >
          Accept cookies
        </button>
      </div>
    </aside>
  );
}
