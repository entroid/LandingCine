import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="absolute inset-0">
        <img
          src="/fondo-hero.png"
          alt="Cinematic background"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="font-dream-avenue text-7xl md:text-8xl mb-16 text-balance text-primary">Aprende Cine</h1>
        <p className="text-2xl md:text-3xl font-medium mb-4 text-balance text-white">
          El cine no solo se ve.
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          Cursos en línea para críticos, estudiantes y cinéfilos que buscan entender y crear cine desde adentro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg" 
          asChild>
            <a href="#cursos">Explorar cursos gratuitos</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-12 py-6 text-lg bg-transparent"
            asChild>
            <a href="#suscripcion">Suscribirme ahora</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
