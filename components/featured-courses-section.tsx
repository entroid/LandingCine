import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, PenTool, Film } from "lucide-react"

export function FeaturedCoursesSection() {
  return (
    <section id="cursos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Cursos destacados</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 hover:border-primary/40 transition-colors group overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] relative">
                <img
                  src="/tarkovsky-film-still-with-dreamy-surreal-atmospher.jpg"
                  alt="Curso Tarkovski"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-4 text-balance">
                  La poesía de Tarkovski: tiempo y memoria en pantalla
                </h3>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Ver curso
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20 hover:border-secondary/40 transition-colors group overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] relative">
                <img
                  src="/dark-antihero-character-from-contemporary-cinema-w.jpg"
                  alt="Curso Antihéroe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <PenTool className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-4 text-balance">
                  El viaje del antihéroe: guion en el cine contemporáneo
                </h3>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Ver curso
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20 hover:border-accent/40 transition-colors group overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] relative">
                <img
                  src="/film-editing-room-with-multiple-screens-showing-ex.jpg"
                  alt="Curso Montaje"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Film className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-4 text-balance">
                  Montaje cinematográfico: el ritmo invisible
                </h3>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                  Ver curso
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-muted/20 to-muted/5 border-muted/20 hover:border-muted/40 transition-colors group overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] relative">
                <img
                  src="/screenwriter-working-on-script-with-film-storyboar.jpg"
                  alt="Curso Narrativa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <PenTool className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-4 text-balance">
                  Narrativas no lineales: de Godard a Nolan
                </h3>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Ver curso
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
