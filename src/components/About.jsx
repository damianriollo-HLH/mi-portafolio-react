export default function About() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="about">
      <div className="grid md:grid-cols-12 gap-gutter">
        <div className="md:col-span-12 mb-12">
          <div className="flex items-center gap-4">
            <h3 className="font-headline-md text-headline-md text-on-background">01. About Me</h3>
            <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            Mi viaje hacia el desarrollo de software no fue lineal. Durante años, gestioné equipos y operaciones en el sector hotelero, donde aprendí que la clave del éxito siempre es la <strong>comunicación, la resolución rápida de problemas y la empatía con el usuario final</strong>.
          </p>
          <p>
            Hoy, aplico esas mismas habilidades ('soft skills') al código. Transicioné al desarrollo Full Stack porque encuentro una profunda satisfacción en construir sistemas robustos desde cero, asegurando que la arquitectura backend soporte una experiencia frontend fluida e intuitiva.
          </p>
          <p>
            Actualmente me enfoco en crear aplicaciones SPA eficientes, utilizando tecnologías modernas para entregar soluciones que no solo funcionen bien, sino que sean mantenibles y escalables.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <div className="project-card rounded-xl p-8 h-full flex flex-col justify-center">
            <p className="font-label-mono text-label-mono text-primary mb-6">Tech Stack Principal</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">javascript</span>
                <span className="font-body-md text-body-md">React / JS</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span className="font-body-md text-body-md">Python</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">php</span>
                <span className="font-body-md text-body-md">Laravel / PHP</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">database</span>
                <span className="font-body-md text-body-md">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}