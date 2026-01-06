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

  // Scroll to works section
  const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const worksSection = document.getElementById('works')
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative flex justify-center py-4 px-4 md:px-8">
      <div className="flex flex-row md:flex-row justify-between items-center w-full max-w-3xl font-serif text-sm">
        <Link href="/" className="text-left">
          Chisato Nakashima
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          <Link href="#works" onClick={handleWorksClick}>
            Works
          </Link>
          <a
            href="https://www.linkedin.com/in/chisato-nakashima-134043225/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skills
          </a>
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
      {/* Mobile Navigation - Full Screen Overlay */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-90 z-40 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          {/* Menu Content */}
          <nav className="fixed inset-0 z-50 md:hidden flex flex-col items-center justify-center pointer-events-none">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 pointer-events-auto"
              aria-label="Close menu"
            >
              <FiX className="text-2xl" />
            </button>
            <div className="flex flex-col gap-8 text-center pointer-events-auto">
              <Link
                href="#works"
                onClick={handleWorksClick}
                className="font-serif text-2xl"
              >
                Works
              </Link>
              <a
                href="https://www.linkedin.com/in/chisato-nakashima-134043225/details/skills/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-2xl"
              >
                Skills
              </a>
              <Link
                href="/contacts"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-2xl"
              >
                Contacts
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
