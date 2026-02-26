"use client"

import { PerformanceDashboard } from "./performance-dashboard"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Emerald glow top-left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      {/* Purple glow bottom-right */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pt-24">
        {/* Left side - Typography */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              Алгоритм Активен
            </span>
          </div>

          <h1 className="font-heading text-5xl font-bold italic leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">XDR FX</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              АЛГОРИТМ
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            Профессиональные торговые сигналы на основе продвинутого алгоритмического анализа.
            Точные входы, интеллектуальные маркеры и оповещения в реальном времени.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://t.me/muua3"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full rounded-xl bg-primary px-8 py-4 text-center text-base font-bold text-primary-foreground transition-all hover:shadow-[0_0_50px_rgba(0,255,136,0.35)] sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Получить Индикатор Бесплатно
              </span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">98.2%</p>
              <p className="text-xs text-muted-foreground tracking-wide">Точность</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">24/7</p>
              <p className="text-xs text-muted-foreground tracking-wide">Мониторинг</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-heading text-2xl font-bold text-primary">+180K$</p>
              <p className="text-xs text-muted-foreground tracking-wide">Годовой доход</p>
            </div>
          </div>
        </div>

        {/* Right side - Dashboard */}
        <div className="flex-1 lg:flex lg:justify-end">
          <PerformanceDashboard />
        </div>
      </div>
    </section>
  )
}
