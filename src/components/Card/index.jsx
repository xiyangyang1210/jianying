import React from 'react'
import {Wrapper} from './style'

export default function Card({courses}) {

  return (
    <Wrapper>
      <div className="price">
      <span>￥</span><p className='p1'>{courses.price}</p>
      <p className='p2'>￥{courses.low_price}</p>
      </div>
      <div className="name">
        <h1>{courses.header}</h1>
        <div className="list">
          <div className="title">
            <p className='p1'>公司老板</p>
            <p className='p2'>重磅名师</p>
          </div>
          <div className="title">
            <p className='p1'>起号涨粉</p>
            <p className='p2'>基础运营</p>
          </div>
          <div className="title">
            <p className='p1'>账号新手</p>
            <p className='p2'>可学人群</p>
          </div>
          <div className="title br">
            <p className='p1'>全程干货</p>
            <p className='p2'>课程特点</p>
          </div>
        </div>
        
      </div>
      <div className="hr"></div>
      <div className="course">
            <span>课时</span>
            <p>共{courses.coursenum}节</p>
            <span>（已有{courses.people}）</span>
      </div>
        <div className="hr"></div>
    </Wrapper>
  )
}
