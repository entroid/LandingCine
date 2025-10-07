export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Cómo funciona</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-serif font-bold text-primary">1</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-60"></div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Explora gratis</h3>
            <p className="text-muted-foreground text-pretty">
              Comienza con nuestros cursos introductorios sin costo. Descubre si el análisis cinematográfico es para ti.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl font-serif font-bold text-secondary">2</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full opacity-60"></div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Suscríbete</h3>
            <p className="text-muted-foreground text-pretty">
              Accede al catálogo completo con una suscripción mensual. Cancela cuando quieras, sin compromisos.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl font-serif font-bold text-accent">3</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-60"></div>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Aprende y crea</h3>
            <p className="text-muted-foreground text-pretty">
              Desarrolla tu mirada crítica y tus habilidades técnicas. Únete a una comunidad de cinéfilos apasionados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
