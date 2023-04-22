import React from 'react'
import {Link} from 'react-router-dom'
export default function Card(props) {

    function set(){
        localStorage.setItem('main_heading' ,props.main_heading);
        localStorage.setItem('poster_url' ,props.poster_url);
        localStorage.setItem('instructor' ,props.instructor);
        localStorage.setItem('small_heading' , props.small_heading);
        localStorage.setItem('student ' ,props.student );
        localStorage.setItem('date_created' ,props.date_created );
        localStorage.setItem('language' ,props.language );
        localStorage.setItem('what_one' ,props.what_one );
        localStorage.setItem('what_two' ,props.what_two );
        localStorage.setItem('what_three' ,props.what_three );

        localStorage.setItem('course_length' ,props.course_length );
        localStorage.setItem('requirement' ,props.requirement );
        localStorage.setItem('description' ,props.description );
        localStorage.setItem('vedio_url' ,props.vedio_url );


      }


    return (

        
        <Link to="/detail" onClick={()=>{set()}} className="card m-4 mt-5  border-0 text-decoration-none" style={{ width: "18rem " ,textDecoration:"none"}}>
        

            <img src={props.poster_url}
                className="card-img-top" alt="card img" />
            <div className="card-body ">
                <h6 className="fw-bold card-text">{props.main_heading}</h6>
                <span className="text-muted  card-text">{props.instructor}</span>
                <div className="d-flex mb-1">
                <div >
                <span class="fa fa-star checked m-1"></span>
                <span class="fa fa-star checked m-1"></span>
                <span class="fa fa-star checked m-1"></span>
                <span class="fa fa-star m-1"></span>
                <span class="fa fa-star m-1"></span>
              </div>

                </div>

                <span className="fw-bold ">Free</span> <br />

                <button className=" bg-warning mt-2 btn border-0 rounded-0 fw-bold btn-sm"  >Bestseller</button>

            </div>
        
        </Link>

    )
}
