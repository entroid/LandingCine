import { Clapperboard, BadgeCheck, Sparkles } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="font-dream-avenue text-5xl md:text-6xl text-center mb-16 text-balance">Cómo funciona</h2> */}

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center group  p-6  transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-primary/15 text-primary ring-1 ring-primary/25 group-hover:bg-primary/20 transition-colors">
                <Clapperboard size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Explora gratis</h3>
            <p className="text-muted-foreground text-pretty">
              Comienza con nuestros cursos introductorios sin costo. Descubre si el análisis cinematográfico es para ti.
            </p>
          </div>

          <div className="text-center group  p-6  transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-secondary/15 text-secondary ring-1 ring-secondary/25 group-hover:bg-secondary/20 transition-colors">
                <BadgeCheck size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Suscríbete</h3>
            <p className="text-muted-foreground text-pretty">
              Accede al catálogo completo con una suscripción mensual. Cancela cuando quieras, sin compromisos.
            </p>
          </div>

          <div className="text-center group  p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-accent/15 text-accent ring-1 ring-accent/25 group-hover:bg-accent/20 transition-colors">
                <Sparkles size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Aprende y crea</h3>
            <p className="text-muted-foreground text-pretty">
              Desarrolla tu mirada crítica y tus habilidades técnicas. Únete a una comunidad de cinéfilos apasionados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
