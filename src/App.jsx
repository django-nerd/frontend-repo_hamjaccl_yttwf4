import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ServicesContact from './components/ServicesContact'

function App() {
  return (
    <div className="font-['Inter',_ui-sans-serif,_system-ui] text-neutral-900 antialiased">
      {/* Header / Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#top" className="text-sm font-medium tracking-wide">Your Name</a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-200 sm:flex">
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline */}
      <div id="top" className="pt-12">
        <Hero />
      </div>

      {/* About */}
      <About />

      {/* Portfolio */}
      <Portfolio />

      {/* Services & Contact */}
      <ServicesContact />

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()} Your Name — Product & Industrial Designer. Minimal, clear, and human.
          </p>
          <p className="mt-2 text-xs text-neutral-400">Palette: near-black, white, and a soft red accent. Typography: Inter for UI, IBM Plex Sans for headings. Imagery: high-contrast, soft-lit, neutral backdrops.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
