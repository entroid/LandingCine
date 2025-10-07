export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Navigation Menu - Left */}
        <nav className="flex items-center gap-8">
          <a href="#cursos" className="text-sm font-medium hover:text-primary transition-colors">
            Cursos
          </a>
          <a href="#categorias" className="text-sm font-medium hover:text-primary transition-colors">
            Categorías
          </a>
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
            Cómo funciona
          </a>
          <a href="#suscripcion" className="text-sm font-medium hover:text-primary transition-colors">
            Suscripción
          </a>
        </nav>

        {/* Logo Space - Right */}
        <div className="flex items-center gap-4">
          <div className="font-serif text-2xl font-bold text-primary">Plano Secuencia</div>
        </div>
      </div>
    </header>
  )
}
