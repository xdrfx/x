import { Activity, Bell, Code2, Shield, TrendingUp, Zap } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Интеллектуальные Маркеры",
    description:
      "Точные точки входа и выхода с адаптивной генерацией сигналов на основе мульти-таймфрейм анализа.",
  },
  {
    icon: Bell,
    title: "Мгновенные Оповещения",
    description:
      "Уведомления в реальном времени о каждом сигнале Buy/Sell, прямо на вашу панель TradingView.",
  },
  {
    icon: Activity,
    title: "Сканирование Рынка",
    description:
      "Непрерывный мониторинг рыночных условий с автоматическим обнаружением высоковероятных сетапов.",
  },
  {
    icon: Shield,
    title: "Управление Рисками",
    description:
      "Встроенные расчёты стоп-лосс и тейк-профит для защиты вашего капитала в каждой сделке.",
  },
  {
    icon: Zap,
    title: "Молниеносное Исполнение",
    description:
      "Генерация сигналов менее чем за секунду гарантирует, что вы никогда не пропустите оптимальную точку входа.",
  },
  {
    icon: Code2,
    title: "Движок Pine Script",
    description:
      "Работает на проприетарном алгоритме Pine Script, отточенном на тысячах бэктестированных сделок.",
  },
]

const codeSnippet = `// XDR FX Algorithm v4.2
//@version=5
indicator("XDR FX", overlay=true)

// Signal Engine
src = close
length = input.int(14, "Period")`

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-primary uppercase">
            Мощные Функции
          </p>
          <h2 className="font-heading text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl text-balance">
            Создано для Профессиональных Трейдеров
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Каждая функция разработана для точности, скорости и надёжности в самых требовательных рыночных условиях.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Features grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/80"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 font-heading text-sm font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pine Script Terminal */}
          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-2xl border border-primary/10 bg-card/80 backdrop-blur-xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-accent/40" />
                  <div className="h-3 w-3 rounded-full bg-primary/40" />
                </div>
                <span className="ml-2 text-xs font-medium text-muted-foreground">
                  xdr_fx_algorithm.pine
                </span>
              </div>
              {/* Code content */}
              <div className="p-5">
                <pre className="overflow-x-auto text-xs leading-relaxed">
                  <code>
                    {codeSnippet.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="mr-4 inline-block w-6 text-right text-muted-foreground/40 select-none">
                          {i + 1}
                        </span>
                        <span
                          className={
                            line.startsWith("//")
                              ? "text-muted-foreground"
                              : line.includes("buySignal") || line.includes("#00ff88") || line.includes("BUY")
                              ? "text-primary"
                              : line.includes("sellSignal") || line.includes("#ff4466") || line.includes("SELL")
                              ? "text-destructive"
                              : line.includes("input") || line.includes("ta.")
                              ? "text-accent"
                              : "text-foreground/80"
                          }
                        >
                          {line || "\u00A0"}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
