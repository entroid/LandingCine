import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Film, Headphones, PenTool } from "lucide-react"

export function CourseCategoriesSection() {
  return (
    <section id="categorias" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Categorías de cursos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-background border-border hover:border-primary/50 transition-colors overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative">
                <img
                  src="/film-analysis-scene-with-geometric-composition-lik.jpg"
                  alt="Análisis y Crítica"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Camera className="w-8 h-8 text-primary mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Análisis y Crítica</h3>
                <p className="text-sm text-muted-foreground mb-4">Ejemplo curso:</p>
                <p className="text-sm font-medium">Kubrick y la geometría visual</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border hover:border-primary/50 transition-colors overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative">
                <img
                  src="/film-director-with-camera-and-dramatic-lighting-se.jpg"
                  alt="Dirección y Rodaje"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Film className="w-8 h-8 text-secondary mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Dirección y Rodaje</h3>
                <p className="text-sm text-muted-foreground mb-4">Ejemplo curso:</p>
                <p className="text-sm font-medium">Iluminación expresiva en bajo presupuesto</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border hover:border-primary/50 transition-colors overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative">
                <img
                  src="/sound-engineer-working-on-film-audio-mixing-in-dar.jpg"
                  alt="Montaje y Sonido"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Headphones className="w-8 h-8 text-accent mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Montaje y Sonido</h3>
                <p className="text-sm text-muted-foreground mb-4">Ejemplo curso:</p>
                <p className="text-sm font-medium">El silencio en el cine de horror</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border hover:border-primary/50 transition-colors overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative">
                <img
                  src="/screenwriter-working-on-script-with-film-storyboar.jpg"
                  alt="Guion y Narrativa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <PenTool className="w-8 h-8 text-primary mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Guion y Narrativa</h3>
                <p className="text-sm text-muted-foreground mb-4">Ejemplo curso:</p>
                <p className="text-sm font-medium">Narrativas no lineales: de Godard a Nolan</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
          >
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  )
}
