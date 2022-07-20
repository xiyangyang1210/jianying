import React,{useState,useEffect} from 'react'
import {Wrapper} from './style'
import {Link,useParams} from 'react-router-dom'

export default function Recommended(props) {
  const {allCourses}=props;
  let {id}=useParams();
  const [refresh, setRefresh] = useState(false);
 
  useEffect(() => {
      refresh && setTimeout(() => setRefresh(false))
  }, [refresh])
  
const doRefresh = () => setRefresh(true)
  return (
    <Wrapper>
      <h1>推荐课程</h1>
      <div className="course">
      {
        allCourses&&allCourses.map(
            item=>(
              item.id==id?'':
                <div className="course-flex" key={item.id}>
                    <Link
                        className='course-List'
                        to={`/`}
                        key={item.id}
                        // onClick={doRefresh()}
                    >
                        <div className="course-Box">
                            <div className="course-Img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="course-Content">
                                <div className="course_cont">
                                  <div className="course_header">{item.header}</div>
                                  <div className="course_name">
                                      <span>{item.name}</span> <p>|</p>
                                      <span>{item.people}</span>
                                  </div>
                                </div>
                                <div className="course_footer">
                                  <div className="course_price">
                                      <span className='course_price_now'><p>￥</p>{item.price}</span>
                                      <span className='course_price_old'><p>￥</p>{item.low_price}</span>
                                  </div>
                                  <button className='btn'>立即学习</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        )
      }
      </div>
    </Wrapper>
  )
}
