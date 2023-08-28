import React from 'react'
import MPLogo from '../images/MP-logo.png'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import LeftNavbar from '../components/LeftNavbar'


// col- col-md-3 col-xl-2 px-sm-2 px-0

const Home = () => {

    return (

        <div className='container-fluid'>
            <div className="row flex-nowrap">
                <LeftNavbar />
                <div className='ms-md-4 ms-xl-0 col-md-10 col-xl-10 px-sm-10'>
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="display-5 tittle-font">
                            Hola!
                            <br />
                            Mirko Sergei Pasten Carcamo
                            <br />
                            Desarrollador Full Stack
                        </h1>
                    </div>
                    <div className="col-4">
                        <h3 className='text-center'>alo</h3>
                    </div>
                </div>
            </div>
            <div className='row bg-light' style={{ height: "100vh", width: "100%" }}>

            </div>
        </div>
    )
}

export default Home