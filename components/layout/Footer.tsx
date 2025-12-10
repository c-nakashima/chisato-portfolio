"use client";

import Link from "next/link";
// icons
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Footer Component
export default function Footer() {
  return (
    <footer className="flex justify-center border-t-1 pt-12 pb-24 px-8 mt-32">
      <div className="flex flex-col justify-between w-full max-w-3xl font-serif text-sm ">
        <p className="font-sans text-base font-light mb-6">
          I am always excited to talk about amazing ideas&lt;3
        </p>
        <Link href="/" className="text-2xl mb-6">
          Chisato Nakashima
        </Link>
        <div className="flex flex-row gap-4 text-xl">
          <Link
            href="mailto:chisato@example.com"
            aria-label="Email"
            className="hover:opacity-70 transition-opacity"
          >
            <LuMail />
          </Link>
          <Link
            href="https://github.com/c-nakashima"
            aria-label="GitHub"
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chisato-nakashima-134043225/"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/part_ton_girl/"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}
