import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AboutPage from '../AboutPage'
import { HomePage } from '../HomePage'
import { ContactPage } from '../ContactPage'
import { OrdersPage } from '../OrdersPage'
import NavBarMenu from '../../../ui/components/NavBarMenu'
import { Cards } from '../../../ui/components/Cards'
import { Footer } from '../../../ui/components/Footer'
import { MenuPage } from '../MenuPage'


export const MilanesaRoutes = () => {
    return (
        <div>
            <NavBarMenu/>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
            <Footer/>
        </div>
    )
}
