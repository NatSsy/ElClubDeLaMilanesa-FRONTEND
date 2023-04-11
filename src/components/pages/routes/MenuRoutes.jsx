import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../../Main'
import { Menus } from '../../Menus'


export const MenuRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="Menus/:NombreMenu" element={<Menus/>}/>
    </Routes>
    </div>
  )
}
