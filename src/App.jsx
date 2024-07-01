import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <h1 className='text-3xl underline'>App</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <Hero/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App