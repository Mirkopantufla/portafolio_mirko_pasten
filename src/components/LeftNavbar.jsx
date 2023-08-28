import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import MPLogo from '../images/MP-logo.png'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import '../styles/LeftNavbar.css'

const LeftNavbar = () => {
    return (
        // d-none d-sm-block 
        <nav className="navbar col-sm-3 col-md-2 col-xl-1 px-sm-2 px-0 bg-dark">
            <div className="d-flex align-items-center flex-sm-column pt-2 customHeigth">
                <ul className="collapse nav nav-pills d-flex align-items-center flex-sm-column mb-sm-auto mb-0 align-items-sm-start" id="menu">
                    <li>
                        <Link to='/'><img className='mb-3 mb-md-0 p-sm-2 p-lg-2 me-md-auto MPLogo img-fluid' src={MPLogo} alt="Logo Mirko Pasten" /></Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline greenLogoColor">Home</span>
                        </a>
                    </li>
                    <li >
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline greenLogoColor">Bootstrap</span>
                        </a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline greenLogoColor">Proyectos</span> </a>
                        <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline greenLogoColor">Customers</span> </a>
                    </li>
                </ul>
                <hr />
                <div className='row d-none d-sm-flex flex-sm-column justify-content-center gy-sm-4 mb-sm-4 mx-auto'>
                    <a href='https://www.instagram.com/mikish17/' target='_blank'><BsInstagram className='fs-1 greenLogoColor' alt='Icono Instagram' /></a>
                    <a href='https://github.com/Mirkopantufla' target='_blank'><BsGithub className='fs-1 greenLogoColor' alt='Icono Github' /></a>
                    <a href='https://www.linkedin.com/in/mirko-pasten-carcamo/' target='_blank'><BsLinkedin className='fs-1 greenLogoColor' alt='Icono LinkedIn' /></a>
                    <a href='https://leetcode.com/user4557NV/' target='_blank'><SiLeetcode className='fs-1 greenLogoColor' alt='Icono LeetCode' /></a>
                </div>


            </div>
            <div className='dropstart'>
                <button className='d-sm-none ms-auto me-3 greenLogoColor dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                    Menú
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default LeftNavbar