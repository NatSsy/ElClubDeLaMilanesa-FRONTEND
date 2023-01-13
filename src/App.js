import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'



export const App = () => {
  return (
    <div>
      <body>
        <header>
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
