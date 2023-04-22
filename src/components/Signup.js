import React from 'react'

export default function Signup() {
  return (
    <div className='container-fluid  p-5 ' >
        <div className="container w-25 mt-5 mb-5">
            <h6 className='fw-bold'>Sign up and start learning</h6>
            <form action="" className="form">
                <input type="text" className="form-control rounded-0 p-3 m-2  fw-bold " placeholder='Full name'/>
                <input type="email" className="form-control rounded-0 p-3 m-2  fw-bold " placeholder='Email'/>
                <input type="password" className="form-control rounded-0 p-3 m-2  fw-bold " placeholder='Password'/>
                <div className="">
                <div className='d-flex align-items-start m-2 w-100'>
                <input type="checkbox" className='form-check rounded-0 me-2' />
                <span>Send me special offers ,personalized Recommandations and learning tips.</span>
                </div>
                <button className="btn rounded-0 shadow text-light btn-primary m-2 p-3 container-fluid btn-lg">Sign up</button>
                <div>
                    <span>by signing up, you agree to our Terms of use and Privacy Policy</span>
                </div>
                </div>
            </form>
        </div>
     
    </div>
  )
}
