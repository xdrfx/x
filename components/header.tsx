"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
              <path d="M2 10L10 2L18 10L10 18L2 10Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M6 10L10 6L14 10L10 14L6 10Z" fill="currentColor" />
            </svg>
          </div>
          <span className="font-heading text-xl font-bold tracking-wider text-foreground">
            XDR FX
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary">
            Функции
          </a>
          <a href="#performance" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary">
            Результаты
          </a>
        </nav>

        <a
          href="https://t.me/muua3"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
        >
          Связаться
        </a>
      </div>
    </header>
  )
}
