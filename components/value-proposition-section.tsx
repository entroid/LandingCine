export function ValuePropositionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dream-avenue text-5xl md:text-6xl mb-6 text-balance">
            Una escuela de cine alternativa
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Aprender cine no es solo manejar una cámara. Es descifrar encuadres, desarmar guiones, escuchar el silencio
            entre planos. Nuestra propuesta combina cursos técnicos y de análisis crítico, con una mirada alternativa y
            no mainstream.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-12">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Cursos básicos gratuitos para explorar</h3>
              <p className="text-muted-foreground">
                Accede sin costo a contenidos introductorios y descubre tu pasión por el análisis cinematográfico.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Suscripción mensual con acceso avanzado</h3>
              <p className="text-muted-foreground">
                Desbloquea el catálogo completo con cursos especializados y masterclasses exclusivas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Profesores en activo</h3>
              <p className="text-muted-foreground">
                Aprende de críticos, directores, sonidistas y guionistas que trabajan en la industria.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/film-director-analyzing-footage-on-editing-screen-.jpg"
              alt="Director analizando footage"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
