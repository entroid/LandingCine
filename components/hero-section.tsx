import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="absolute inset-0">
        <img
          src="/dark-cinematic-film-noir-scene-with-dramatic-light.jpg"
          alt="Cinematic background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/95" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-balance">Plano Secuencia</h1>
        <p className="text-xl md:text-2xl text-secondary font-medium mb-4 text-balance">
          El cine no solo se ve. Se piensa, se discute, se desmonta.
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          Cursos en línea para críticos, estudiantes y cinéfilos que buscan entender y crear cine desde adentro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            Explorar cursos gratuitos
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg bg-transparent"
          >
            Suscribirme ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
