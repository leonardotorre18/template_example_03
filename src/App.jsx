import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="bg-gray-900 text-white font-first">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <section>
          <Grid />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
