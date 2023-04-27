import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="" className='navbar-brand ms-4' width="50" />
        <a href="/" className='navbar-brand fw-bold text-info-emphasis nav-underline'>Unicorn</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link fw-fw-semibold" aria-current="page" href="#">categories</a>
              <ul class="dropdown-menu rounded-0 border-0 text-decoration-none fw-bold shadow-lg " >
                <li><a class="dropdown-item" href="#recommand">Recommended for you</a></li>
                <li><a class="dropdown-item" href="#studentview">Student also view</a></li>
                <li><a class="dropdown-item" href="#">Python</a></li>
                <li><a class="dropdown-item" href="#">Data Science Complete bootcamp</a></li>
                <li><a class="dropdown-item" href="#">Full Stack WebDevelopment</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fw-fw-semibold" aria-current="page" href="#">Unicorn buiness</a>
              <ul class="dropdown-menu rounded-0 border-0 text-decoration-none fw-bold shadow-lg p-4"  >
                <li className='dropdown-item d-flex flex-column '>
                  <li className='mb-3'>Access over 19,000 Unicorn courses anytime </li>
                  <span className="btn  btn-dark rounded-0 shadow border-0 ">Try Unicorn Buiness</span>
                </li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fw-fw-semibold" aria-current="page" href="#">Teach on Unicorn</a>
              <ul class="dropdown-menu rounded-0 border-0 text-decoration-none fw-bold shadow-lg p-4"  >
                <li className='dropdown-item d-flex flex-column '>
                  <li className='mb-3'>Turn what you know about opportinity ?</li>
                  <span className="btn  btn-dark rounded-0 shadow border-0 ">learn more</span>
                </li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-fw-semibold" aria-current="page" href="#">My Learning</a>

            </li>

          </ul>
          <form className="d-flex w-50 me-5" role="search">
            <input className="form-control  border-1 text-muted rounded-5 " type="search" aria-label="Search" placeholder='Search' />
          </form>
          <div>

            <span className="rounded-5 forn-control active me-5 d-flex align-items-center ">

              <span class="material-symbols-outlined text-info-emphasis fw-bold me-4 " style={{ fontSize: "1.8rem" }}>shopping_cart</span>

              <Link to="/signup">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width="47" className='border-dark shadow-lg rounded-5' />

              </Link>

            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
