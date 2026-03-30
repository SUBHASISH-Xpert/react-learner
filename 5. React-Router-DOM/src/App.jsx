import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboute from './Pages/Aboute'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboute />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App