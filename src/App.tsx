import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './sections/About'
import Concept from './sections/Concept'
import Hero from './sections/Hero'
import History from './sections/History'
import Platforms from './sections/Platforms'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Platforms/>
      <Concept />
      <History />
      <Footer />
    </>
  )
}

export default App
