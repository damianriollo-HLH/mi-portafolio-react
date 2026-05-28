export default function Hero() {
  return (
    <section className="min-h-[819px] flex items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container/10 via-background to-background -z-10"></div>
      <div className="w-full grid md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 flex flex-col items-start justify-center">
          <p className="font-label-mono text-label-mono text-primary mb-4">Hola, soy</p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background mb-4">
            Damián Riollo.
          </h1>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface-variant mb-6">
            Desarrollador Web Full Stack.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Resolviendo problemas complejos uniendo lógica y diseño. Construyendo experiencias digitales escalables, limpias y eficientes.
          </p>
          <div className="flex gap-4">
            <a className="btn-primary-custom px-8 py-4 rounded font-label-mono text-label-mono font-bold" href="#projects">
              Ver mis proyectos
            </a>
            <a aria-label="GitHub" className="btn-secondary-custom px-4 py-4 rounded flex items-center justify-center" href="https://github.com" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}