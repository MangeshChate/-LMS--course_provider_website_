import React, { useEffect, useState } from 'react'

export default function Lecture() {


    const [heading, main_heading] = useState('')
    const [poster, poster_url] = useState('')
    const [instruct, instructor] = useState('')
    const [small_h, small_heading] = useState('')
    const [stu, student] = useState('')
    const [date, date_created] = useState('')
    const [lang, language] = useState('')
    const [length, course_length] = useState('')
    const [des, description] = useState('')
    const [req, requirement] = useState('')

    const [what_one, what_you_learn_one] = useState('')
    const [what_two, what_you_learn_two] = useState('')
    const [what_three, what_you_learn_three] = useState('')
    const [v_url, vedio_url] = useState('')


    useEffect(() => {
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
        vedio_url(localStorage.getItem('vedio_url'));

    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row  ">
                    <div className="col-lg-9 col-sm-10 ">
                        <iframe width="1420" height="700" src={v_url} title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className='rounded-3 '
                        >

                        </iframe>

                    </div>
                    <div className="col-lg-3 col-sm-10 " >


                        <div className="  m-3 p-4 shadow rounded-2" style={{ border: "2px solid grey" }}>
                            <h2 className='fw-semibold'>What you'll learn</h2>

                            <div class="d-flex align-items-center mt-4">
                                <span class="material-symbols-outlined fw-bold">check</span>
                                <span>{what_one}</span>
                            </div>

                            <div class="d-flex align-items-center mt-4">
                                <span class="material-symbols-outlined fw-bold">check</span>
                                <span>{what_two}</span>
                            </div>

                            <div class="d-flex align-items-center mt-4">
                                <span class="material-symbols-outlined fw-bold">check</span>
                                <span>{what_three}</span>
                            </div>

                            <h2 className='fw-semibold mt-5'>Description</h2>
                            <div class="d-flex align-items-center mt-4">
                              
                                <span>{des}</span>
                            </div>


                        </div>



                    </div>

                </div>
                <div className="container-fluid m-3 p-5 w-75 d-flex flex-column rounded-3 shadow" style={{ border: "2px solid grey" }}>

                    <h3 className='fw-bold'>About this Course:</h3>

                    <span className='fw-bold mt-3'>{heading}</span>
                    <span>{small_h}</span>
                    <hr />

                    <div className="">
                        <span className='me-5 pe-3'> Instructor:  </span>
                        <span className='ms-5'>{instruct}</span>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between w-50'>
                        <div >By the numbers</div>
                        <div>
                            <span>Students: {stu}</span>
                            <span>Language: {lang}</span>
                            <span>Caption: yes</span>

                        </div>
                        <div>
                            <span>video {length} total </span>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <span className='me-5'> Latest update:  </span>
                        <span className='ms-5'>{date}</span>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between w-50'>
                        <span className='me-5'>Description</span>
                        <span className='ms-5'>{des}</span>
                    </div>
                    <hr />
                    <div className='d-flex  '>
                        <span >What you'll learn</span>
                        <span className='ms-5'>
                            <li>{what_one}</li>
                            <li>{what_two}</li>
                            <li>{what_three}</li>

                        </span>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between w-50'>
                        <span className='me-5'>Requirement</span>
                        <span className='ms-5'>{req}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
