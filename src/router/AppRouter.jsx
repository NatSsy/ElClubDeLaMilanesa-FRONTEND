import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/home" element = {<HomePage/>} />
    </Routes>
  </BrowserRouter>
  )
}
