import React from 'react'
import {Wrapper} from './style'
import {Link} from 'react-router-dom'

export default function Course({course}) {
  return (
    <Wrapper>
        {/* <h1>超值限时抢</h1> */}
      {
        course&&course.map(
            item=>(
                <div className="course-flex">
                    <Link
                        className='course-List'
                        to={`/coursedetail/${item.id}`}
                        key={item.id}
                    >
                        <div className="course-Box">
                            <div className="course-Img">
                                <img src={item.img} alt="" />
                                <div className="get-Course">
                                    <p>{item.coursenum}节课</p>
                                </div>
                            </div>
                            <div className="course-Content">
                                <div className="course_header">{item.header}</div>
                                <div className="course_name">
                                    <span>{item.name}</span> <p>|</p>
                                    <span>{item.people}</span>
                                </div>
                                <div className="course_price">
                                    <span className='course_price_now'><p>￥</p>{item.price}</span>
                                    <span className='course_price_old'><p>￥</p>{item.low_price}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        )
      }
    </Wrapper>
  )
}
