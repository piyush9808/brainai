import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits'
import Collaborations from './components/Collaborations'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <h1 className='text-3xl underline'>App</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <Hero/>
        <Benefits/>
        <Collaborations/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App