import React from 'react'
import {Wrapper} from './style'
import { Link } from 'react-router-dom'

export default function Lists() {
  return (
    <Wrapper>
      <div className="content">
      <Link to="/kecheng">
        <i className='iconfont icon-wodekecheng'></i>
        <span>全部课程</span>
      </Link>
      <Link to="/zuoye">
        <i className='iconfont icon-dazuoye'></i>
        <span>我的作业</span>
      </Link>
      <Link to="/quan">
        <i className='iconfont icon-youhuiquan'></i>
        <span>我的优惠券</span>
      </Link>
      <Link to="/wode">
        <i className='iconfont icon-kecheng'></i>
        <span>我的课程</span>
      </Link>
      </div>
      <div className='hr'></div>
    </Wrapper>
  )
}
