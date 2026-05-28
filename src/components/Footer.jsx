export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop gap-base">
        <div className="font-label-mono text-label-mono text-on-surface-variant">
          © 2026 DAMIÁN RIOLLO. BUILT WITH PRECISION.
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors transition-opacity hover:opacity-80 flex items-center gap-2" href="#github">
            <span className="material-symbols-outlined text-xl">code</span>
            <span className="font-label-mono text-label-mono">GitHub</span>
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors transition-opacity hover:opacity-80 flex items-center gap-2" href="#linkedin">
            <span className="material-symbols-outlined text-xl">work</span>
            <span className="font-label-mono text-label-mono">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}