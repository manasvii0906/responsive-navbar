import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
            onClick={closeMenu}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950">
              N
            </span>
            <span>Nova<span className="text-cyan-400">.</span></span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
          >
            Get started <ArrowUpRight size={16} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 border-t-transparent opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Get started <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <main id="home" className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-5 py-20 sm:px-8">
        <section className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Responsive navigation
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Simple navigation.
            <span className="block text-cyan-400">Better experiences.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            A clean, responsive React navbar with a mobile hamburger menu,
            smooth dropdown transition, and accessible navigation controls.
          </p>
          <a
            href="#features"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Explore features <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <section id="features" className="border-t border-white/10 bg-slate-900/50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">Built for every screen</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Desktop links collapse into a hamburger menu on smaller screens.
            Select a mobile link to navigate and automatically close the menu.
          </p>
        </div>
      </section>
      <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="text-2xl font-bold">About Nova</h2>
        <p className="mt-3 text-slate-400">A lightweight starter layout for your next React project.</p>
      </section>
      <section id="contact" className="border-t border-white/10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p className="mt-3 text-slate-400">Replace this section with your contact details or call to action.</p>
        </div>
      </section>
    </div>
  );
}
