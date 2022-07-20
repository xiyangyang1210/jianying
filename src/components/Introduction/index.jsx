import React,{useState} from 'react'
import {Wrapper} from './style'
import img1 from '../../assets/images/touxiang.jpg'

export default function Introduction({courses}) {
  const [hasCollect, setHasCollect] = useState(false);
  return (
    <Wrapper>
      <div className="teacher">
        <h1>主讲人</h1>
        <div className="tea">
          <div className="people">
            <div className="circle">
              <img src={img1} alt="" />
            </div>
            <div className="name">
              <p className='p1'>{courses.name}</p>
              <p className='p2'>优质教程导师</p>
            </div>
          </div>
          <div className='btn' onClick={() => setHasCollect(!hasCollect)}>{hasCollect ? "已关注" : "关注"}</div>
        </div>
      </div>
    </Wrapper>
  )
}
