import { Check } from "lucide-react"

const plans = [
  {
    name: "Доступ на 1 год",
    oldPrice: "9 999 ₽",
    price: "1 999 ₽",
    period: "/год",
    badge: "Скидка 80%",
    description: "Полный доступ к алгоритму XDR FX на один год.",
    features: [
      "Все сигналы Buy/Sell",
      "Оповещения в реальном времени",
      "Интеграция с TradingView",
      "Мульти-таймфрейм анализ",
      "Поддержка по Email",
    ],
    highlighted: false,
  },
  {
    name: "Пожизненный доступ",
    oldPrice: "24 999 ₽",
    price: "4 999 ₽",
    period: "/разово",
    badge: "Лучший выбор — Скидка 80%",
    description: "Безлимитный пожизненный доступ со всеми будущими обновлениями.",
    features: [
      "Всё из годового плана",
      "Пожизненные обновления",
      "Приоритетная поддержка",
      "Ранний доступ к новым функциям",
      "Закрытое торговое сообщество",
      "Персональная сессия онбординга",
    ],
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            Тарифы
          </p>
          <h2 className="font-heading text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl text-balance">
            Премиум Доступ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Выберите план, подходящий для вашей торговли. Никаких скрытых комиссий и неожиданных списаний.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all ${
                plan.highlighted
                  ? "border-primary/30 bg-card/80 shadow-[0_0_60px_rgba(0,255,136,0.08)]"
                  : "border-border bg-card/50"
              }`}
            >
              {/* Internal glow for highlighted */}
              {plan.highlighted && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[80px]" />
              )}

              {plan.badge && (
                <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="font-heading text-lg font-bold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-lg font-medium text-muted-foreground line-through decoration-destructive/60 decoration-2">
                  {plan.oldPrice}
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-bold italic text-foreground lg:text-6xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      plan.highlighted ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/muua3"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-xl py-4 text-center text-sm font-bold transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]"
                    : "border border-border bg-secondary/50 text-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                Получить: {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
