import React from 'react'
import { Header } from './style'
import { Link,useLocation } from 'react-router-dom'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'
import {SearchBar} from 'antd-mobile' 

export default function index() {
  const {pathname}=useLocation()
  console.log(pathname,isPathPartlyExisted(pathname))
  if (isPathPartlyExisted(pathname)) return
  return (
    <Header>
      
      <div className="inphead">
      <SearchBar placeholder='请输入内容' className='inp' />
        {/* <i className='iconfont icon-sousuo sousuo'></i>
        <input type="text" placeholder='好友组团卡点照' className='inp' /> */}
        <div className='stu'>
          <i className='iconfont icon-24gl-playSquare'></i>
          <p>学习中心</p>
        </div>
      </div>
      {/*  <div className="biaoti">
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
        {/* <span>推荐</span>
        <span>免费专区</span>
        <span style={{color:"#f23053"}}>精品课</span>
        <span>直播</span>
        <span>拍剪教学</span> */}
      {/* </div>*/} 
    </Header>
  )
}
