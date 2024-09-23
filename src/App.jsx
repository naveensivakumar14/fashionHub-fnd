import { useState } from 'react'

//importing react components
import Navbar from './components/Navbar'
import SimpleSlider from './components/Hero'
import Categories from './components/Categ'
import Trending from './components/Trending'
import Review from './components/Review'
import Products from './components/Products'
import Footer from './components/Footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <SimpleSlider/>
     <Categories/>
     <Trending/>
     <Products/>
     <Review/>
     <Footer/>
    </>
  )
}

export default App
