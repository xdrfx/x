export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary">
              <path d="M2 10L10 2L18 10L10 18L2 10Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M6 10L10 6L14 10L10 14L6 10Z" fill="currentColor" />
            </svg>
          </div>
          <span className="font-heading text-sm font-bold tracking-wider text-foreground">
            XDR FX
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Условия использования
          </a>
          <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Отказ от ответственности
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {"© 2026 XDR FX. Все права защищены."}
        </p>
      </div>
    </footer>
  )
}
