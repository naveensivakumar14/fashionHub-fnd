import { useState } from 'react'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

//importing react components
import Navbar from './components/Navbar'
import SimpleSlider from './components/Hero'
import Categories from './components/Categ'
import Trending from './components/Trending'
import Review from './components/Review'
import Products from './components/Products'
import Footer from './components/Footer'
import Allproducts from './pages/Allproducts';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <BrowserRouter>
        <Navbar/>
        <div id="home"><SimpleSlider/></div>
        <div id="categories"><Categories/></div>
        <div id="trending">
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/Allproducts" element={<Allproducts />} />
          </Routes>
        </div>
        <Products/>
        <div id="reviews"><Review/></div>
        <div id="contacts"><Footer/></div>
     </BrowserRouter>
     
     
    </>
  )
}

export default App
