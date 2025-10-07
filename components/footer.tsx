export function Footer() {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/Foco.svg" 
              alt="Plano Secuencia" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground text-pretty">
              La escuela de cine alternativa para críticos, estudiantes y cinéfilos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Análisis y Crítica</li>
              <li>Dirección y Rodaje</li>
              <li>Montaje y Sonido</li>
              <li>Guion y Narrativa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Foro de discusión</li>
              <li>Eventos en vivo</li>
              <li>Masterclasses</li>
              <li>Proyectos colaborativos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Centro de ayuda</li>
              <li>Contacto</li>
              <li>Términos de uso</li>
              <li>Política de privacidad</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Plano Secuencia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
