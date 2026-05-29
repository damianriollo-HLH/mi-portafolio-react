import miProyectoImg from '../assets/img/image.png';

export default function Projects() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="projects">
      <div className="mb-12">
        <div className="flex items-center gap-4">
          <h3 className="font-headline-md text-headline-md text-on-background">02. Featured Work</h3>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>
      </div>
      
      {/* Proyecto Principal */}
      <div className="project-card rounded-xl overflow-hidden grid md:grid-cols-12 relative mb-gutter">
        <div className="md:col-span-7 h-64 md:h-auto bg-surface-container-high relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity hover:opacity-80 hover:mix-blend-normal transition-all duration-500"
            style={{ backgroundImage: `url(${miProyectoImg})` }}
          ></div>
        </div>
        <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-surface-container/90 backdrop-blur-sm relative z-10">
          <p className="font-label-mono text-label-mono text-primary mb-2">Featured Project</p>
          <h4 className="font-headline-md text-headline-md text-on-background mb-4">GeoData Explorer SPA</h4>
          <div className="bg-surface-container-low p-6 rounded mb-6 font-body-md text-body-md text-on-surface-variant border border-white/5">
            <p>App SPA con React que integra mapas interactivos (Leaflet) para la visualización de datos geoespaciales. El backend fue construido con Laravel, proporcionando una API RESTful robusta y segura.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="tech-chip px-3 py-1 rounded font-label-mono text-label-mono">React</span>
            <span className="tech-chip px-3 py-1 rounded font-label-mono text-label-mono">Laravel</span>
            <span className="tech-chip px-3 py-1 rounded font-label-mono text-label-mono">Leaflet.js</span>
            <span className="tech-chip px-3 py-1 rounded font-label-mono text-label-mono">MySQL</span>
          </div>
          <div className="flex gap-4">
            <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-2" href="#demo">
              <span className="material-symbols-outlined">link</span>
              <span className="font-label-mono text-label-mono">Live Demo</span>
            </a>
            <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-2" href="https://github.com/damianriollo-HLH/events-apps" target="_blank">
              <span className="material-symbols-outlined">code</span>
              <span className="font-label-mono text-label-mono">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Proyectos Secundarios */}
      <div className="grid md:grid-cols-2 gap-gutter mt-16">
        <div className="project-card rounded-xl p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="material-symbols-outlined text-4xl text-primary font-light">folder_open</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#code"><span className="material-symbols-outlined">code</span></a>
          </div>
          <h5 className="font-headline-md text-headline-md text-on-background text-2xl mb-3">API de Gestión Hotelera</h5>
          <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Sistema backend desarrollado en Python (FastAPI) para centralizar reservas, inventario y métricas de ocupación.</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="font-label-mono text-label-mono text-on-surface-variant text-xs">Python</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant text-xs">FastAPI</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant text-xs">PostgreSQL</span>
          </div>
        </div>

        <div className="project-card rounded-xl p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="material-symbols-outlined text-4xl text-primary font-light">folder_open</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#code"><span className="material-symbols-outlined">code</span></a>
          </div>
          <h5 className="font-headline-md text-headline-md text-on-background text-2xl mb-3">Dashboard Financiero</h5>
          <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Interfaz administrativa SPA para visualización de KPIs. Implementación de gráficos dinámicos y manejo de estado complejo.</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="font-label-mono text-label-mono text-on-surface-variant text-xs">React</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant text-xs">Chart.js</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant text-xs">Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
}