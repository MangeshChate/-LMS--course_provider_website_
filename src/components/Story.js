import React from 'react'

const story = [

    {
        name: "Ismaeel Ameen",
        des: "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
        img: "https://s.udemycdn.com/home/ub-case-studies/Ismaeel_Ameen.png"
    },
    {
        name: "Karen Hunter",
        des: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace.",
        img: "https://s.udemycdn.com/home/ub-case-studies/Karen_hunter.png"
    }
]

export default function Story() {
    return (
      <div className="p-5 rounded-5 shadow m-5 bg-light ">
         <div className=" d-flex cpontainer justify-content-center align-items-center p-5 " >
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center flex-column " >


                <span className='fw-bold text-info-emphasis ' style={{ fontSize: "1.5rem",fontFamily:"sans-serif" }}>
                    With Udemy Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.

                </span>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center w-25 flex-column ">
                <span className='rounded-5  '>

                    <img src="https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png" alt="" width="130" className='rounded-5 ' />
                </span>
                <span className="fw-bold d-flex ms-2 align-items-center" style={{ fontSize: "1.5rem" }}>
                    <p className='fw-bold mt-3 text-info-emphasis'>Ian Stevens</p>


                </span>
            </div>

        </div>
      </div>
    )
}
