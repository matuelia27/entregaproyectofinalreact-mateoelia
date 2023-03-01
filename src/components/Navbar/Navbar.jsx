import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  

  return (
    <>


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"> <img src='/logomarca.png' alt='logo' style={{width:'10rem'}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to={'/'}>Inicio</Link>      
              
              </li>
              <li className="nav-item">
              <Link to={'/contact'}>Contacto</Link>
              
              </li>

              
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>

  )
}
export default Navbar