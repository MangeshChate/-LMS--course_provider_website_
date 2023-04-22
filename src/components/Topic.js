import React from 'react'

export default function Topic() {
  return (
    <>

      <div className=' bg-light p-5'>
        <h2 className='m-5  fw-bold text-dark-emphasis mb-5'>Topics Recommended for you</h2>
        <div className='  d-flex flex-column  p-3 '>

          <div className="row  m-2 d-flex justify-content-evenly p-2">
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg  btn-outline-dark rounded-0 m-2 ">Python</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">DataScience</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">ML</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">WebScraping</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">Flask</button>

          </div>

          <div className="row d-flex m-2 justify-content-evenly p-2">
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">Java</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">WordPress</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">SEO</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">Elementor</button>
            <button className="col-lg-2 fw-bold border-2 shadow col-sm-12 btn btn-lg btn-outline-dark rounded-0 m-2">Web Design</button>



          </div>
        </div>
      </div>

      <div className=" p-5  ">
        <div className="container d-flex flex-column ">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col">

              <div className='d-flex align-items-center'>
                <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="" className='navbar-brand ' width="55" />
                <h1 className='fw-bold ms-3 text-info-emphasis mt-3'>Unicorn</h1>
                <h3 className='fw-bold ms-3 mt-4 text-info-emphasis'>Teams</h3>

              </div>
              <ul className=' mt-4'>
                <h1 className='fw-bold text-info-emphasis'>Upskill your team with Unicorn Teams</h1>

                <h4 className='fw-bold text-dark mt-4'>
                 <li className='m-2'> Unlimited access to 19,000+ top Udemy courses, anytime, anywhere </li>
                 <li className='m-2'> International course collection in 14 languages </li>
                 <li className='m-2'> Top certifications in tech and business </li>
                </h4>
              </ul>
              <button className="btn btn-dark rounded-0 btn-lg shadow m-4  ">Start Learning</button>
            </div>
            <div className="col">
              <img src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="" className='rounded-2 ' width="500" />
            </div>

          </div>
          <div className="row d-flex align-items-center justify-content-between mt-5 mb-5">
            <div className="col">
              <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" className='rounded-2 ' width="500" />
            </div>
            <div className="col">

            
              <ul className=' mt-4'>
                <h1 className='fw-bold text-info-emphasis'>Become an instructor</h1>

                <h4 className='fw-bold text-dark mt-4 w-75'>
                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                </h4>
              </ul>
              <button className="btn btn-dark rounded-0 btn-lg shadow m-4  ">Start Teaching</button>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}
