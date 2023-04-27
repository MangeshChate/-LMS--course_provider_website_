import React from 'react'
import Card from './Card'
import data from '../../course.json'
export default function StudentView() {
  return (
    <div className='m-5'> 
    <h2 className='fw-bolder text-dark-emphasis ' id="studentview">Student also view</h2>
    
      <div className="d-flex justify-content-around">
      {
          data.course.map((item)=>{
            return(

              <Card  
              main_heading={item.main_heading} 
              poster_url={item.poster_url} 
              instructor={item.instructor}
              small_heading={item.small_heading}
              student = {item.students}
              date_created={item.date_created}
              language={item.language}
              what_one={item.what_one}
              what_two={item.what_two}
              what_three={item.what_three}

              course_length={item.course_length}
              requirement={item.requirement}
              description={item.description}
              vedio_url={item.vedio_url}

              />
            


            )
          })
        }
      
        
       

      </div>
    </div>
  )
}
