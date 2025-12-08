"use client";

import Link from "next/link";

// Header Component
export default function Header() {
  return (
    <header className="flex justify-center py-4 px-8">
      <div className="flex flex-row justify-between w-full max-w-3xl font-serif text-sm ">
        <Link href="/">Chisato Nakashima</Link>
        <nav className="flex gap-2">
          <Link href="/works">Works</Link>
          <Link href="/what-i-do">Skills</Link>
          <Link href="/contacts">Contacts</Link>
        </nav>
      </div>
    </header>
  );
}
