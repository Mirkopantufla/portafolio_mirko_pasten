import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import MPLogo from '../images/MP-logo.png'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'

const LeftNavbar = () => {
    return (
        <div className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to='/'><img className='d-flex align-items-center pb-3 mb-md-0 me-md-auto MPLogo img-fluid' src={MPLogo} alt="Logo Mirko Pasten" /></Link>

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
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
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
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
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr />
                <div className='row d-flex flex-column justify-content-center gy-4 mb-4'>
                    <a href='https://www.instagram.com/mikish17/' target='_blank'><BsInstagram className='fs-1 greenLogoColor' alt='Icono Instagram' /></a>
                    <a href='https://github.com/Mirkopantufla' target='_blank'><BsGithub className='fs-1 greenLogoColor' alt='Icono Github' /></a>
                    <a href='https://www.linkedin.com/in/mirko-pasten-carcamo/' target='_blank'><BsLinkedin className='fs-1 greenLogoColor' alt='Icono LinkedIn' /></a>
                    <a href='https://leetcode.com/user4557NV/' target='_blank'><SiLeetcode className='fs-1 greenLogoColor' alt='Icono LeetCode' /></a>
                </div>
            </div>
        </div>
    )
}

export default LeftNavbar