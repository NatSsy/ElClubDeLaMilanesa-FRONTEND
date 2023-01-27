import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from '../ClubMilanesa/pages/AboutPage'
import { ContactPage } from '../ClubMilanesa/pages/ContactPage'
import { OrdersPage } from '../ClubMilanesa/pages/OrdersPage'
import { HomePage } from '../ClubMilanesa/pages/HomePage'
import { MenuPage } from '../ClubMilanesa/pages/MenuPage'
import { Footer } from '../ui/components/Footer'
import NavBarMenu from '../ui/components/NavBarMenu'
import { Cards } from '../ui/components/Cards'

export const AppRouter = () => {
  return (<BrowserRouter>
  <NavBarMenu/>
  <Cards/>
    <Routes>
      <Route path="/home" element = {<HomePage/>} />
      <Route path="/about" element = {<AboutPage/>} />
      <Route path="/menu" element = {<MenuPage/>} />
      <Route path="/contact" element = {<ContactPage/>} />
      <Route path="/ordersgi" element = {<OrdersPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}
