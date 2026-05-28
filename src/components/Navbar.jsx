export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <div className="font-label-mono text-label-mono font-bold tracking-tighter text-primary">
          DAMIÁN RIOLLO
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1 active:scale-95 transition-transform" href="#home">Home</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:text-primary transition-all duration-300 active:scale-95" href="#about">About</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:text-primary transition-all duration-300 active:scale-95" href="#projects">Projects</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface hover:text-primary transition-all duration-300 active:scale-95" href="#contact">Contact</a>
        </div>
        <a className="hidden md:inline-flex items-center justify-center px-6 py-2 btn-secondary-custom font-label-mono text-label-mono rounded" href="#resume">
          Resume
        </a>
        {/* Botón menú móvil */}
        <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
        </button>
      </div>
    </nav>
  );
}