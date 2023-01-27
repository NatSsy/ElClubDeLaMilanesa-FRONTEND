import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'


export const Footer = () => {
    return (
        <div>
            <div>
                <footer className="py-3 my-4 container-fluid bg-black">
                    <ul className="nav justify-content-center pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">E</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">L</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"></a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">C</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">L</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">U</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">B</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"></a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">D</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">E</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"></a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">L</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">A</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"></a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">M</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">I</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">L</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">A</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">N</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">E</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">S</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">A</a></li>
                    </ul>

                    <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                        <div className='icon pb-4'>
                            <div className='f'>
                                <a className='nav-link' href="https://www.facebook.com" target="_blank"><i class="fa fa-brands fa-facebook"></i></a>
                            </div>

                            <div className='f'>
                                <a className='nav-link' href='https://www.instagram.com' target="_blank"><i class="fa fa-brands fa-instagram"></i></a>
                            </div>

                            <div className='f'>
                                <a className='nav-link' href='https://www.twitter.com' target="_blank"><i class="fa fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </ul>
                    <p className="text-center text-white"> El Club de la Milanesa 1997 - 2023 &copy;</p>
                </footer>
            </div>
        </div>
    )
}
