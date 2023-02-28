import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../../NavBar'
import { MenuEjecutivo } from '../MenuEjecutivo'
import { MenuRuastico } from '../MenuRuastico'
import { MenuVegetariano } from '../MenuVegetariano'


/*
*/
export const MenuRoutes = () => {
  return (
    <div>
<NavBar/>
    <Routes>
        <Route path="Menu Ejecutivo" element={<MenuEjecutivo/>}/>
        <Route path="Menu Rustico" element={<MenuRuastico/>}/>
        <Route path="Menu Vegetariano" element={<MenuVegetariano/>}/>
        
    </Routes>
    </div>
  )
}
