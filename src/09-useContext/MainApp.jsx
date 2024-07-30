import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './HomePage'
import AbouPage from './AboutPage'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import UserProvider from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AbouPage />} />
        <Route path='/*' element={<Navigate to='/about' />} />
      </Routes>
    </UserProvider>
  )
}

export default MainApp
