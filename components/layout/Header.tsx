'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

// Header Component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative flex justify-center py-4 px-4 md:px-8">
      <div className="flex flex-row md:flex-row justify-between items-center w-full max-w-3xl font-serif text-sm">
        <Link href="/" className="text-left">
          Chisato Nakashima
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          <Link href="/works">Works</Link>
          <Link href="/what-i-do">Skills</Link>
          <Link href="/contacts">Contacts</Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FiX className="text-lg" />
          ) : (
            <FiMenu className="text-lg" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border-t md:hidden z-50   shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col px-4 py-4 gap-4 max-w-3xl mx-auto">
            <Link
              href="/works"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-sm"
            >
              Works
            </Link>
            <Link
              href="/what-i-do"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-sm"
            >
              Skills
            </Link>
            <Link
              href="/contacts"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-sm"
            >
              Contacts
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
