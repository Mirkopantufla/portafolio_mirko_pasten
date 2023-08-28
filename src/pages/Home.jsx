import React from 'react'
import MPLogo from '../images/MP-logo.png'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import LeftNavbar from '../components/LeftNavbar'



const Home = () => {

    return (

        <div className='container-fluid'>
            <div className="row flex-sm-nowrap">
                <LeftNavbar />
                <div className='ms-sm-2 ms-xl-0 col-md-10 col-xl-10 px-sm-10'>
                    <h1 className="display-5 tittle-font">
                        Hola!
                        <br />
                        Mirko Sergei Pasten Carcamo
                        <br />
                        Desarrollador Full Stack
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Home