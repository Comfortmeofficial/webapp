"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookieConsent:v2";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(() => {
    try {
      return !localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = (accepted) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? "accepted" : "rejected");
    } catch {}
    setShow(false);
  };

  if (!mounted || !show) return null;

  return createPortal(
    <aside className="pointer-events-auto isolate fixed bottom-0 left-0 right-0 z-[2147483647] w-full rounded-t-2xl bg-white p-4 text-[#273038] shadow-xl sm:bottom-6 sm:left-auto sm:right-6 sm:w-[310px] sm:rounded-2xl">
      <button
        type="button"
        onClick={() => dismiss(false)}
        className="absolute right-3 top-2 cursor-pointer text-[#7f8990]"
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
          className="w-full cursor-pointer rounded-md px-3 py-2 text-xs text-[#58636c] sm:w-auto"
        >
          Reject All
        </button>
        <button
          type="button"
          onClick={() => dismiss(true)}
          className="w-full cursor-pointer rounded-md bg-[#1a6268] px-4 py-2 text-xs font-medium text-white sm:w-auto"
        >
          Accept cookies
        </button>
      </div>
    </aside>,
    document.body
  );
}
