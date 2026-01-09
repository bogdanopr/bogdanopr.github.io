import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Cursor />
      <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
            wish.dev
          </span>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:block px-5 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-sm font-medium transition-colors">
            Let's Talk
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} def@wish.dev. All rights reserved. Built with React, Tailwind CSS and Framer Motion.
        </p>
      </footer>
    </div>
  )
}

export default App


