import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuRoutes } from '../components/pages/routes/MenuRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/*" element={<MenuRoutes/>} />

         </Routes>
    </BrowserRouter>
  )
}
