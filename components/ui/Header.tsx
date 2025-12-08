"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between font-serif text-sm py-4 px-8">
      <Link href="/">Chisato Nakashima</Link>

      <nav className="flex gap-2">
        <Link href="/works">Works</Link>
        <Link href="/what-i-do">Skills</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}
