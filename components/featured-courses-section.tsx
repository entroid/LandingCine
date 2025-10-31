import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, PenTool, Film } from "lucide-react"

export function FeaturedCoursesSection() {
  return (
    <section id="cursos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-dream-avenue text-5xl md:text-6xl text-center mb-16 text-balance">Cursos destacados</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
            <CardContent className="p-0">
              <img
                src="/hq720.jpg"
                alt="Curso Tarkovski"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="relative z-10 h-[420px] flex items-end">
                <div className="w-full p-6 bg-black/50 backdrop-blur-[1px]">
                  <h3 className="text-md font-semibold mb-4 text-balance">
                    La poesía de Tarkovski: tiempo y memoria en pantalla
                  </h3>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 py-3">
                    Ver curso
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
            <CardContent className="p-0">
              <img
                src="/John-Constantine-mejores-antiheroes-del-cine-427452224.webp"
                alt="Curso Antihéroe"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="relative z-10 h-[420px] flex items-end">
                <div className="w-full p-6 bg-black/50 backdrop-blur-[1px]">
                  <h3 className="text-md font-semibold mb-4 text-balance">
                    El viaje del antihéroe: guion en el cine contemporáneo
                  </h3>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 py-3">
                    Ver curso
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
            <CardContent className="p-0">
              <img
                src="/edicion-y-montaje-para-la-historia-del-cine-portada.jpg.webp"
                alt="Curso Montaje"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="relative z-10 h-[420px] flex items-end">
                <div className="w-full p-6 bg-black/50 backdrop-blur-[1px]">
                  <h3 className="text-md font-semibold mb-4 text-balance">
                    Montaje cinematográfico: el ritmo invisible
                  </h3>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 py-3">
                    Ver curso
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
            <CardContent className="p-0">
              <img
                src="/lost-highway-patricia-arquette-bill-pullman.jpg"
                alt="Curso Narrativa"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="relative z-10 h-[420px] flex items-end">
                <div className="w-full p-6 bg-black/50 backdrop-blur-[1px]">
                  <h3 className="text-md font-semibold mb-4 text-balance">
                    Narrativas no lineales: de Godard a Nolan
                  </h3>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 py-3">
                    Ver curso
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
