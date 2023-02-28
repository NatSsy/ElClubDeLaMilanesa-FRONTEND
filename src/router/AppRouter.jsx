import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { MilanesaRoutes } from '../ClubMilanesa/pages/routes/MilanesaRoutes'

export const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/login" element = {<LoginPage/>} />
      <Route path="/register" element = {<RegisterPage/>} />
      <Route path='/*' element ={<MilanesaRoutes/>}/>
    </Routes>

  </BrowserRouter>
  )
}
