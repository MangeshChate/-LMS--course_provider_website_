import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
export default function Coursedetail() {


    const [ heading, main_heading] = useState('')
    const [poster  , poster_url ] = useState('')
    const [ instruct ,instructor  ] = useState('')
    const [ small_h , small_heading ] = useState('')
    const [ stu ,student  ] = useState('')
    const [ date , date_created ] = useState('')
    const [ lang , language ] = useState('')
    const [ length ,course_length  ] = useState('')
    const [ des ,description  ] = useState('')
    const [ req ,  requirement] = useState('')
 
    const [ what_one , what_you_learn_one ] = useState('')
    const [ what_two , what_you_learn_two ] = useState('')
    const [ what_three , what_you_learn_three ] = useState('')

    

 

    



  useEffect(()=>{
    main_heading(localStorage.getItem('main_heading'));
    poster_url(localStorage.getItem('poster_url'));
    instructor(localStorage.getItem('instructor'));
    small_heading(localStorage.getItem('small_heading'));
    student(localStorage.getItem('student'));
    date_created(localStorage.getItem('date_created'));
    language(localStorage.getItem('language'));
    course_length(localStorage.getItem('course_length'));
    requirement(localStorage.getItem('requirement'));
    description(localStorage.getItem('description'));

    what_you_learn_one(localStorage.getItem('what_one'));
    what_you_learn_two(localStorage.getItem('what_two'));
    what_you_learn_three(localStorage.getItem('what_three'));

    // vedio_url(localStorage.getItem('vedio_url'));



},[])










  return (
    <>
      <div className="conatiner-fluid ">
        <div className="container-fluid pt-5 pb-5 bg-dark text-light d-flex  ">
          <div className="container w-50 ">

            <div className="d-flex flex-column">
              <div className='m-1'>
                <span className="text-secondary fw-bold me-3">Development </span>
                <span className="text-secondary fw-bold me-3">Programming language </span>
                {/* <span className="text-secondary fw-bold me-3">Python</span> */}
              </div>

              <h1 className='fw-bold ' style={{ fontFamily: " Josefin Sans, sans-serif", fontSize: "3rem" }}>{heading}</h1>

              <h4 className='fw-lighter '>{small_h}</h4>

              <div>

                <span className="checked m-1 fw-bold">3.2</span>
                <span class="fa fa-star checked m-1"></span>
                <span class="fa fa-star checked m-1"></span>
                <span class="fa fa-star checked m-1"></span>
                <span class="fa fa-star m-1"></span>
                <span class="fa fa-star m-1"></span>

                <span className='m-1 ms-3 text-secondary text-decoration-underline'>47,597 ratings</span>
                <span className='m-1'>{stu} students</span>


              </div>
              <div className='d-flex align-items-center'>
                Created by
                <span className='text-secondary ms-2 text-decoration-underline'>{instruct}</span>
                <span class="material-symbols-outlined ms-3">verified</span>
              </div>
              <div className='d-flex mt-3'>
                <div className='d-flex align-items-centre mt-2 '>
                  <span class="material-symbols-outlined me-2">task_alt</span>
                  <span>Last updated {date}</span>
                </div>
                <div className='d-flex align-items-centre mt-2 ms-4'>
                  <span class="material-symbols-outlined me-2 ">language</span>
                  <span>{lang}</span>
                </div>
              </div>

            </div>

          </div>
          <div style={{ width: "40rem" }}>

            {/* Card */}
            <div className="card  position-absolute justify-content-end rounded-0">
              <div className="card rounded-0" style={{ width: "25rem", heigh: "60rem" }}>
                <img src={poster}
                  className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                  <div className="card-title fw-bolder d-flex align-items-center  " style={{ fontSize: "1.3rem" }}>FREE
                    <span className="text-muted small text-decoration-line-through ms-2 fw-lighter">₹3,339 </span>
                    <span className="fw-lighter ms-2" style={{ fontSize: "13px" }}>100% off</span>
                  </div>
                  <div >
                    <Link to="/lecture" className="btn  rounded-0 btn-primary text-light fw-bold w-100">Enroll</Link>
                  </div>

                  <div className="container justify-content-center d-flex m-2">
                    <span className="small text-decoration-underline text-secondary" style={{ fontSize: "12px" }}>Full life time
                      access</span>
                  </div>
                  <div className="container">
                    <span className="fw-bold small">This course includes:</span>
                    <div className="d-flex align-items-center mt-1">
                      <span className="material-symbols-outlined fw-light">play_arrow</span>
                      <span className="small ms-2" style={{ fontSize: "12px" }}>{length} hours on demand video</span>
                    </div>

                    <div className="d-flex align-items-center mt-1">
                      <span className="material-symbols-outlined fw-light">code</span>
                      <span className="small ms-2" style={{ fontSize: "12px" }}>1 Coading exercise</span>
                    </div>

                    <div className="d-flex align-items-center mt-1">
                      <span className="material-symbols-outlined fw-light">description</span>
                      <span className="small ms-2" style={{ fontSize: " 12px" }}>62 articles</span>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="container-fluid  ms-5 ps-5 ">
          <div className="  m-5 p-5 w-50" style={{ border: "2px solid grey" }}>
            <h2 className='fw-semibold'>What you'll learn</h2>

            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fw-bold">check</span>
              <span>{what_one}</span>
            </div>

            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fw-bold">check</span>
              <span>{what_two}</span>
            </div>

            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fw-bold">check</span>
              <span>{what_three}</span>
            </div>






          </div>
        </div>
        {/* requirements  */}
        <div className="container-fluid  ms-5 ps-5 ">
          <div className=" ms-5 p-5 w-50" style={{ border: "2px solid grey" }}>
            <h2 className='fw-semibold'>Requirements</h2>
            <ul>
              <li>{req}</li>
            </ul>

          </div>
        </div>
        {/* description  */}
        <div className="container-fluid  ms-5 ps-5 ">
          <div className="  m-5 p-5 w-50" style={{ border: "2px solid grey" }}>
            <h2 className='fw-semibold'>Description</h2>
            <p>
                {des}
            </p>


          </div>
        </div>
      </div>
    </>
  )
}
