"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { logoutAction } from "@/lib/actions/auth-actions";
import type { AdminRole } from "@/lib/models";

type NavLink = { href: string; label: string; exact?: boolean };

const baseLinks: NavLink[] = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/articles", label: "Articles" },
  { href: "/admin/articles/new", label: "Create Article", exact: true },
  { href: "/admin/articles?status=draft", label: "Drafts", exact: true },
  {
    href: "/admin/articles?status=published",
    label: "Published Articles",
    exact: true,
  },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/tags", label: "Tags" },
];

const superAdminLinks: NavLink[] = [
  { href: "/admin/users", label: "Admin Users" },
  { href: "/admin/legal", label: "Legal Pages" },
];

const footerLinks = [
  { href: "/admin/settings", label: "Settings" },
  { href: "/admin/profile", label: "Profile" },
];

export default function AdminNav({
  role,
  name,
}: {
  role: AdminRole;
  name: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.toString();

  const links =
    role === "super_admin" ? [...baseLinks, ...superAdminLinks] : baseLinks;

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-[#e6ebea] bg-white">
      <div className="border-b border-[#e6ebea] px-5 py-5">
        <p className="font-serif text-lg text-[#151b20]">BSY Legal Admin</p>
        <p className="mt-0.5 text-xs text-[#8a9096]">
          Signed in as {name} ({role === "super_admin" ? "Super Admin" : "Admin"})
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {links.map((link) => {
          const [linkPath, linkQuery = ""] = link.href.split("?");
          const isActive = link.exact
            ? pathname === linkPath && currentSearch === linkQuery
            : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-[#18535b] text-white"
                  : "text-[#3f474d] hover:bg-[#f2f4f3]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#e6ebea] px-3 py-4 space-y-1">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm text-[#3f474d] transition hover:bg-[#f2f4f3]"
          >
            {link.label}
          </Link>
        ))}
        <form action={logoutAction}>
          <button
            type="submit"
            className="w-full rounded-md px-3 py-2 text-left text-sm text-red-700 transition hover:bg-red-50"
          >
            Log out
          </button>
        </form>
      </div>
    </aside>
  );
}
