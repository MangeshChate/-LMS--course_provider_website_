import React from 'react'

export default function Footer() {
  return (
    <footer className='container-fluid bg-dark text-light'>
    <div className='container-fluid d-flex justify-content-between p-5'>
    <div className="d-flex">
      <h4 className='fw-bold me-5'>Teach the World online</h4>
      <span>Create an online video course, reach students across the globe, and earn money</span>

    </div>
    <div className="">
      <button className="btn btn-lg btn-outline-light rounded-0">Teach on Unicorn</button>
    </div>
    </div>
    
    <hr />
   
    <div className='container-fluid d-flex justify-content-between p-5'>
    <div className="d-flex">
      <h4 className='fw-bold me-5'>Top companies choose <span className='fw-bolder text-info' style={{fontSize:"2rem"}}>Unicorn Business</span> to build in-demand career skills.</h4>
     

    </div>
    <div className=" fw-bold">
      <button className="btn btn-lg btn-outline-light rounded-0 me-4">Nasdaq</button>
      <button className="btn btn-lg btn-outline-light rounded-0 me-4">Box</button>
      <button className="btn btn-lg btn-outline-light rounded-0 me-4">NetApp</button>
      <button className="btn btn-lg btn-outline-light rounded-0 ">Eventbrite</button>

    </div>
    </div>
    <hr />
    <div className='container-fluid p-5 d-flex justify-content-between'>
        <div className='d-flex '>
          <ul type="none" className='me-5'>
            <li>Unicorn Buiness</li>
            <li>Teach on Unicorn</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>

          </ul>
          <ul type="none" className='me-5'>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affilite</li>
            <li>Investors</li>

          </ul>
          <ul type="none">
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>

          </ul>
        </div>
        <div>

        <button className="btn btn-lg btn-outline-light rounded-0 ">English</button>
        </div>

    </div>
    <div className="container-fluid ms-5 pb-5 d-flex align-items-center justify-content-between">
      <div className='d-flex align-items-center'>
      <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="" className='navbar-brand ' width="60" />
      <h1 className='fw-bold ms-3 '>Unicorn</h1>
        
      </div>
      <div>
        <span className="text-secondary me-5">@ 2023 Unicorn,Inc.</span>
      </div>
    </div>
      
    </footer>
  )
}
