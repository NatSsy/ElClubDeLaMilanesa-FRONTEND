import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import {  Menus } from './components/Menus'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



export const App = () => {
  return (
    <div>
      <body>
        <header>

          <BrowserRouter>
            <Routes>
              <Route path="/Menus" element={<Menus/>}/>
            </Routes>
          </BrowserRouter>
          <NavBar />
        </header>
        <main>
          <h1>Los Burgeses</h1>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  )
}
