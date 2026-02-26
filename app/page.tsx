import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </main>
  )
}
