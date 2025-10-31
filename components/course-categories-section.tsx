import { Button } from "@/components/ui/button"

export function CourseCategoriesSection() {
  return (
    <section id="categorias" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-dream-avenue text-5xl md:text-6xl text-center mb-16 text-balance">
          Categorías de cursos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <figure className="relative overflow-hidden rounded-lg group">
            <img
              src="/photo-1680260609000-e03f9271496d.avif"
              alt="Análisis y Crítica"
              className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent text-center">
              <h3 className="text-lg font-semibold">Análisis y Crítica</h3>
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden rounded-lg group">
            <img
              src="/photo-1704714026622-d0aae0d7206f.avif"
              alt="Dirección y Rodaje"
              className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent text-center">
              <h3 className="text-lg font-semibold">Dirección y Rodaje</h3>
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden rounded-lg group">
            <img
              src="/photo-1533488177199-217f0d616a68.avif"
              alt="Montaje y Sonido"
              className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent text-center">
              <h3 className="text-lg font-semibold">Montaje y Sonido</h3>
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden rounded-lg group">
            <img
              src="/photo-1521217785376-261a8105348f.avif"
              alt="Guion y Narrativa"
              className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent text-center">
              <h3 className="text-lg font-semibold">Guion y Narrativa</h3>
            </figcaption>
          </figure>
        </div>

        <div className="text-center hidden">
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent py-6"
          >
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  )
}
