"use client"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Главная", href: "#home" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          <span className="text-blue-500">MEYKIN</span>
          <span className="text-white">.TRIP</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold border border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
          Записаться
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md animate-fadeInUp">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <button className="m-4 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold border border-blue-500">
              Записаться
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
