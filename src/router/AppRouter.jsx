import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from '../ClubMilanesa/pages/AboutPage'
import { HomePage } from '../ClubMilanesa/pages/HomePage'
import { MenuPage } from '../ClubMilanesa/pages/MenuPage'
import { Footer } from '../ui/components/Footer'
import NavBarMenu from '../ui/components/NavBarMenu'

export const AppRouter = () => {
  return (<BrowserRouter>
  <NavBarMenu/>
    <Routes>
      <Route path="/home" element = {<HomePage/>} />
      <Route path="/about" element = {<AboutPage/>} />
      <Route path="/menu" element = {<MenuPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}
