import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import classnames from 'classnames'
import {Wrapper} from './style'

export default function Biaoti() {
    const {pathname}=useLocation()
  return (
    <Wrapper>
        <Link to="/tuijian" className={classnames({active:pathname=='/tuijian'})}>
          <span>推荐</span>
        </Link>
        <Link to="/mianfei" className={classnames({active:pathname=='/mianfei'})}>
          <span>免费专区</span>
        </Link>
        <Link to="/" className={classnames({active:pathname=='/'})}>
          <span>精品课</span>
        </Link>
        <Link to="/zhibo" className={classnames({active:pathname=='/zhibo'})}>
          <span>直播</span>
        </Link>
        <Link to="/jianpai" className={classnames({active:pathname=='/jianpai'})}>
          <span>拍剪教学</span>
        </Link>
    </Wrapper>
  )
}
