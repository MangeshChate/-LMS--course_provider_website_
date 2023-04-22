import React from 'react'


export default function Coursoul() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade m-5 rounded-5 shadow">
                <div className="carousel-inner rounded-5">
                    <div className="carousel-item active ">
                        <div className="position-absolute container d-flex w-50 align-items-center h-100  ">
                            <div className='w-25'></div>
                            <div className='container bg-light rounded-2 shadow p-5 fw-bold text-info-emphasis w-75 '>
                                <h1 className='fw-bold font-monospace'>Prer for your IT Certificate</h1>
                                <span>
                                    <a href="/">Explore a future in IT.</a>
                                    <p>Start learning toward AWS certification, CompTIA A+ certification, and more.</p>
                                </span>
                            </div>

                        </div>
                        <img src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image/34c63aef-8d1f-483e-b0ea-0ead94879e56.jpg" className="d-block w-100 rounded-3 z-0" alt="img-1  " />
                    </div>
                    <div className="carousel-item">
                    <div className="position-absolute container d-flex w-50 align-items-center h-100  ">
                            <div className='w-25'></div>
                            <div className='container bg-light rounded-2 shadow p-5 fw-bold text-info-emphasis w-75 '>
                                <h1 className='fw-bold font-monospace'>Prer for your IT Certificate</h1>
                                <span>
                                    <a href="/">Explore a future in IT.</a>
                                    <p>Start learning toward AWS certification, CompTIA A+ certification, and more.</p>
                                </span>
                            </div>

                        </div>
                        <img src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg" className="d-block w-100 rounded-3" alt="img-2" />
                    </div>
                    <div className="carousel-item">
                    <div className="position-absolute container d-flex w-50 align-items-center h-100  ">
                            <div className='w-25'></div>
                            <div className='container bg-light rounded-2 shadow p-5 fw-bold text-info-emphasis w-75 '>
                                <h1 className='fw-bold font-monospace'>Prer for your IT Certificate</h1>
                                <span>
                                    <a href="/">Explore a future in IT.</a>
                                    <p>Start learning toward AWS certification, CompTIA A+ certification, and more.</p>
                                </span>
                            </div>

                        </div>
                        <img src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image/cb0a31c5-c1d0-448a-90f9-deea4a24cafb.jpg" className="d-block w-100 rounded-3" alt="img-3" />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon rounded-3  bg-dark" aria-hidden="true"></span>

                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon rounded-3  bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <div className="shadow-lg bg-dark text-light m-5 rounded-4  p-4 d-flex  align-items-center justify-content-between" >
                <div >
                    <span className="fw-bold me-3">
                        Training 5 or more people ?

                    </span>
                    <span>Get your team access to Unicorn's Top 19,000+ courses</span>
                </div>
                <button className='btn btn-outline-light fw-bold  rounded-0  font-monospace'>Get Unicorn buiness</button>

            </div>
        </div>
    )
}
