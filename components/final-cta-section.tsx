import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section id="suscripcion" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/dark-cinematic-film-noir-scene-with-dramatic-light.jpg"
          alt="Background cinematográfico"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">El cine te está esperando</h2>
        <p className="text-xl text-muted-foreground mb-12 text-pretty">
          No se trata solo de ver películas. Se trata de entenderlas, de desarmarlas, de crear las tuyas propias.
          Comienza tu viaje cinematográfico hoy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            Comenzar ahora gratis
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg bg-transparent"
          >
            Ver planes de suscripción
          </Button>
        </div>
      </div>
    </section>
  )
}
