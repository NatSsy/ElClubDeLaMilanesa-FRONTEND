import React from 'react'
import nata from "../../assets/img/about/nata.jpeg"
import miguel from "../../assets/img/about/miguel.jpeg"
import brendan from "../../assets/img/about/brendan.jpeg"
import mauro from "../../assets/img/about/mauro.jpeg"
import nacho from "../../assets/img/about/nacho.jpeg"

const AboutPage = () => {
  return (
    <div>
        <div className="texto">
            <h1 className="titulo-abaut text-center">ACERCA DE NOSOTROS</h1>
            <p className="intro text-center text-white py-4">
                Recordá: No se puede comprar la felicidad. Pero si una sanguche de milanesa que es casi lo mismo.
            </p>
        </div>
    <div className="container">
      <div className='row card-container'>

        {/* <div className="card col-2">
          <img src={} alt="Imagen 1"/>
          <div className="info">
            <h2>Juan Aguera</h2>
            <p>Descripción 1</p>
          </div>
        </div> */}
      
        <div className="card col-2">
          <img src={miguel} alt="Imagen 2"/>
          <div className="info">
            <h2>Miguel Montoro</h2>
            <p>"La mente es el poder maestro que crea y moldea. Y el hombre es mente…"</p>
          </div>
        </div>
  
        <div className="card col-2">
          <img src={brendan} alt="Imagen 3"/>
          <div className="info">
            <h2>Brendan Heindl</h2>
            <p></p>
          </div>
        </div>
  
        <div className="card col-2">
          <img src={nata} alt="Imagen 4"/>
          <div className="info">
            <h2>Natanael SS</h2>
            <p>Descripción 1</p>
          </div>
        </div>
  
        <div className="card col-2">
          <img src={mauro} alt="Imagen 5"/>
          <div className="info">
            <h2>Mauro Ibañez</h2>
            <p>"Te convertiras en lo que sos, no en lo que quieres"</p>
          </div>
        </div>
  
        <div className="card col-2">
          <img src={nacho} alt="Imagen 6"/>
          <div className="info">
            <h2>Ignacio Sierra</h2>
            <p>"Hay 2 días en los que no puedes hacer nada, uno es ayer y el otro es mañana"</p>
          </div>
        </div>
  
    </div>
    </div>
  </div>
    
  )
}

export default AboutPage