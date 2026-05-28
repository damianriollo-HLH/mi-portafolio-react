import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-on-background bg-background min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-black dark">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App