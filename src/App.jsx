import { useEffect, useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import UserDetails from './components/UserDetails'
import UserEdit from './components/UserEdit'
import UserDelete from './components/UserDelete'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { UserProvider } from './context/UserContext'


function App() {
  
  return (
    <>

      <UserProvider>
        <h1>Desafio - DW3</h1>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/userList' element={<UserList/>} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/create" element={<UserForm />} />
            <Route path="/edit/:id" element={<UserEdit />} />
            <Route path="/delete/:id" element={<UserDelete />} />
          </Routes>
          <Footer/>
        </Router>
      </UserProvider>

    </>
  )
}

export default App
