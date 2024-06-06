import './App.css'
import Features from './component/Features'
import Header from './component/Header'
import Hero from './component/Hero'
import Services from './component/Services'
import { Teame } from './component/Teame'
import About from './component/About'
import Footer from './component/Footer'
import Partener from './component/Partener'

function App() {

  return (
    <div className=''>
      <Header />
      <Hero />
      <Services />
      <Teame />
      <About />
      <Partener />
      <Features />
      <Footer />
    </div>
  )
}

export default App
