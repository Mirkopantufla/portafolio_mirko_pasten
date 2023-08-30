import React from 'react'
import LeftNavbar from '../components/LeftNavbar'
import '../styles/Home.css'



const Home = () => {

    return (

        <div className='container-fluid'>
            <div className="row flex-sm-nowrap">
                <LeftNavbar />
                <div className=' ms-xl-0 col-md-10 col-xl-10 min-vh-100 bg-dark d-flex align-items-center justify-content-center'>
                    <h1 className="display-5 tittle-font text-light">
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