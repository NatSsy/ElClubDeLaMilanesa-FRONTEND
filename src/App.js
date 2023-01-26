import React from 'react'
import { Footer } from './ui/components/Footer'
import { Cards } from './ui/components/Cards'
import NavBarMenu from './ui/components/NavBarMenu'




export const App = () => {
  return (
    <div>
      <body>
        <header>
          <NavBarMenu/>
        </header>
        <main>
          <Cards />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  )
}
