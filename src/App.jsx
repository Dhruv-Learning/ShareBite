import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ShareFood from './pages/ShareFood'
import BrowerFood from './pages/BrowerFood'
import Footer from './components/Footer'
import FoodDetails from './pages/FoodDetails'
import { Github } from 'lucide-react'

function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/share' element={<ShareFood/>}/>
      <Route path='/find-food' element={<BrowerFood/>}/>
      <Route path="/food/:id" element={<FoodDetails/>} />
      <Route path="https://github.com/Dhruv-Learning" element={<Github/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
