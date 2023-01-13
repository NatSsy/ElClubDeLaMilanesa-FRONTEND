import React from 'react'


export const NavBar = () => {
    return (
        <>
            <div className="container-fluid bg-black">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 textNav">
                        <li><a href="#" className="nav-link px-2 link-light pe-4">Inicio</a></li>
                        <li><a href="#" className="nav-link px-2 link-light pe-4">Menus</a></li>
                        <li><a href="#" className="nav-link px-2 link-light pe-4">Pedidos</a></li>
                        <li><a href="#" className="nav-link px-2 link-light pe-4">Sobre Nosotros</a></li>
                        <li><a href="#" className="nav-link px-2 link-light pe-4">Contacto</a></li>
                    </ul>

                    <div className="btn col-md-3 text-end">
                        <button type="button" className="btn me-2 btnNav">Ingresar</button>
                        <button type="button" className="btn btnNav">Resgistrarse</button>
                    </div>
                </header>
            </div>
        </>
    )
}
