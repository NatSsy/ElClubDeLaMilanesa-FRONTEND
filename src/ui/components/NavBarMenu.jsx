
import { NavLink, useNavigate } from 'react-router-dom'
import React from 'react'

import logo from "../../assets/img/logo/logo.png" //FIJATE ESTO PARA TRAER LAS FOTOS DEL CARRUSEL

export const NavBarMenu = () => {

  const navigate = useNavigate()


  const onRegister = () => {
    navigate("/register", {
      replace: true
    })
  }

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    })
  }
  return (
    <>
      <div className="container-fluid bg-black">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="" className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-decoration-none">
          <img className='logo ms-2' src={logo}></img>
          </a>


          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
            <li><NavLink to="/home" className=" nav-link px-2 link-light pe-4 textNav">Inicio</NavLink></li>
            <li><NavLink to="/menu" className="nav-link px-2 link-light pe-4 textNav">Menus</NavLink></li>
            <li><NavLink to="/orders" className="nav-link px-2 link-light pe-4 textNav">Pedidos</NavLink></li>
            <li><NavLink to="/about" className="nav-link px-2 link-light pe-4 textNav">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2 link-light pe-4 textNav">Contactanos</NavLink></li>
          </ul>

          <div className="bton col-md-3 text-end">
            <button onClick={onLogout} className="btn me-2 btnNav">Ingresar</button>
            <button onClick={onRegister} className="btn me-2 btnNav">Resgistrarse</button>
          </div>
        </header>
      </div>
    </>
  )
}

export default NavBarMenu