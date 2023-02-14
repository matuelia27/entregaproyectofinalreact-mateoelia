import React from 'react'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {

  return (
    <>


      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#" img src='/logomarca.png' alt='logo' style={{width:'10rem'}}></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Store </a>
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