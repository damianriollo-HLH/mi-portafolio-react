export default function Contact() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-label-mono text-label-mono text-primary mb-4">03. What's Next?</p>
        <h3 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background mb-6">Get In Touch</h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Actualmente estoy abierto a nuevas oportunidades de desarrollo Full Stack. Ya sea que tengas una pregunta o simplemente quieras saludar, haré lo posible por responderte.
        </p>
        
        <form className="flex flex-col gap-6 text-left project-card p-8 rounded-xl max-w-lg mx-auto">
          <div className="flex flex-col gap-2">
            <label className="font-label-mono text-label-mono text-on-surface" htmlFor="name">Nombre</label>
            <input className="input-custom rounded p-3 font-body-md" id="name" placeholder="Tu nombre" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-mono text-label-mono text-on-surface" htmlFor="email">Email</label>
            <input className="input-custom rounded p-3 font-body-md" id="email" placeholder="tu@email.com" type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-mono text-label-mono text-on-surface" htmlFor="message">Mensaje</label>
            <textarea className="input-custom rounded p-3 font-body-md" id="message" placeholder="¿En qué puedo ayudarte?" rows="4"></textarea>
          </div>
          <button className="btn-primary-custom py-3 rounded font-label-mono text-label-mono font-bold mt-4" type="button">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}