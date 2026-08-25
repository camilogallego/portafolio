"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const links = [
  ["Experiencia", "#experience"],
  ["Stack", "#stack"],
  ["Proyectos", "#projects"],
  ["Contacto", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Ir al inicio">CG<span>.</span></a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Hablemos <span aria-hidden>↗</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menú">
        <span /><span />
      </button>
      <AnimatePresence>
        {open && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Navegación móvil" initial={reduced ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
