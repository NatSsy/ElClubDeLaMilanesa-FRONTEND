import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { AppRouter } from './router/AppRouter'




export const App = () => {
  return (
    
      <div>

        <header>
          <NavBar />
        </header>
        <main>
          <h1>Los Burgeses</h1>
          
          <AppRouter/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      
    
  )
}
