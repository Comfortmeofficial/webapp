"use client";

import { useState, useSyncExternalStore } from "react";

const FacebookIcon = "/assets/sections/footer/social-icons/Facebook.svg";
const InstagramIcon = "/assets/sections/footer/social-icons/instagram.svg";
const XIcon = "/assets/sections/footer/social-icons/x.svg";

// The URL never changes without a remount, so there's nothing to subscribe to.
function subscribe() {
  return () => {};
}
function getSnapshot() {
  return window.location.href;
}
function getServerSnapshot() {
  return "";
}

export default function ArticleShareBar({ title }) {
  const [copied, setCopied] = useState(false);
  // Server has no window, so it renders "". useSyncExternalStore is the
  // React-sanctioned way to read a client-only value without a hydration
  // mismatch or an extra setState-in-effect render.
  const shareUrl = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available — no-op
    }
  }

  return (
    <div className="mt-8">
      <p className="text-sm font-semibold text-[#1a2127]">Share this Article</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="transition hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={FacebookIcon} alt="" className="h-9 w-9" />
        </a>
        <a
          href="https://instagram.com/bsylegal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Instagram"
          className="transition hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={InstagramIcon} alt="" className="h-9 w-9" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="transition hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={XIcon} alt="" className="h-9 w-9" />
        </a>
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 rounded-full border border-[#dbe1de] bg-white px-4 py-2 text-xs font-medium text-[#435057] transition hover:bg-[#f5f5f5]"
        >
          {copied ? "Copied!" : "Copy Link"}
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7-1h4v2h-4v-2Zm3-4h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V7Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
