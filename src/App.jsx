import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <h1 className='text-3xl underline'>App</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App