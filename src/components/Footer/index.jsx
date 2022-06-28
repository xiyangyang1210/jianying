import React from 'react'
import {FooterWrapper} from './style'
import { Link,useLocation,NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'

export default function Footer() {
  const {pathname}=useLocation()
  console.log(pathname,isPathPartlyExisted(pathname))
  if (isPathPartlyExisted(pathname)) return
  return (
    <FooterWrapper>
      <NavLink to="/jianji" className={classnames({active:pathname=='/jianji'})}>
        <i className='iconfont icon-jianji'></i>
        <span>剪辑</span>
      </NavLink>
      <NavLink to="/tongkuan" className={classnames({active:pathname=='/tongkuan'})}>
        <i className='iconfont icon-shipin'></i>
        <span>剪同款</span>
      </NavLink>
      <NavLink to="/home" className={classnames({active:pathname=='/home' || pathname=='/'})}>
        <i className='iconfont icon-wodekecheng'></i>
        <span>创作课堂</span>
      </NavLink>
      <NavLink to="/news" className={classnames({active:pathname=='/news'})}>
        <i className='iconfont icon-xiaoxi'></i>
        <span>消息</span>
      </NavLink>
      <NavLink to="/mine" className={classnames({active:pathname=='/mine'})}>
        <i className='iconfont icon-31wode'></i>
        <span>我的</span>
      </NavLink>
    </FooterWrapper>
  )
}
