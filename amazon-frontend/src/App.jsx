import React from 'react'
import Header from './Components/Header/Header'


import CarouselPage from './Components/Caroursel/CarouselPage'
import Category from './Components/Categories/Category'
import Products from './Components/Products/Products'

const App = () => {
  return (
    <div>
      <Header />
      <CarouselPage/>
      <Category/>
      <Products/>
    </div>
  )
}

export default App
