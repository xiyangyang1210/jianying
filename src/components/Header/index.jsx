import React from 'react'
import { Header } from './style'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'
import {SearchBar} from 'antd-mobile' 

export default function index() {
  const navigate = useNavigate()
  const {pathname}=useLocation()
  // console.log(pathname,isPathPartlyExisted(pathname))
  if (isPathPartlyExisted(pathname)) return
  return (
    <Header>
      
      <div className="inphead">
      {/* <SearchBar placeholder='好友组团卡点照' className='inp' 
        onClick={() => navigate("/search")} /> */}
        <span className="s1">
            <i className="iconfont icon-sousuo sousuo">&#xe655;</i>
        </span>
        <input type="text" placeholder='好友组团卡点照' className='inp'
          onClick={() => navigate("/search")}
        />
        <div className='stu'>
          <i className='iconfont icon-24gl-playSquare'></i>
          <p onClick={() => navigate("/wode")}>学习中心</p>
        </div>
      </div>
    </Header>
  )
}
