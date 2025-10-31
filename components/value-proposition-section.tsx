export function ValuePropositionSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dream-avenue text-5xl md:text-6xl mb-6 text-balance">
            Una escuela de cine alternativa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center text-pretty">
            Aprender cine descifrando encuadres, desarmando guiones, escuchando los silencios entre planos. Nuestra propuesta combina cursos técnicos y de análisis crítico, con una mirada alternativa no mainstream.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="space-y-12 md:order-2 md:col-span-5 md:flex md:flex-col md:justify-center">
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

          <div className="relative md:order-1 md:col-span-7">
            <img
              src="/image.png"
              alt="Pierrot Le Fou, Godard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
