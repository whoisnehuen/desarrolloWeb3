import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import UserList from './components/userList/userList'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Proveedor } from './context/proveedor'


function App() {
  
  return (
    <>

      <Proveedor>
        <h1>Desafio - DW3</h1>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/taks' element={<TodoList/>} />
            <Route path='/userList' element={<UserList/>} />
          </Routes>
          <Footer/>
        </Router>
      </Proveedor>

    </>
  )
}

export default App
