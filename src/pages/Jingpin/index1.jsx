import {Wrapper} from './style'
import Biaoti from '../Home/Biaoti'
import Lists from './Lists'
import Course from '../Course'
import Banner from './Banner'
import React,{useState,useEffect} from 'react'
import {useNavigate,Outlet,useParams} from 'react-router-dom'
import {getCourse} from '../../api/request';
import { Empty } from 'antd-mobile'


export default function Jingpin() {
  const [course,setCourse]=useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    (async()=>{
      let {data} = await getCourse()
      // console.log(data)
      setCourse(data)
    })()
  })
  useEffect(()=>{
    // console.log('--------')
    navigate(`/home/jingpin`)
  },[])
  return (
    <Wrapper>
        <Banner />
        <Lists />
        <h1>超值限时抢</h1>
        {!course.length&&<Empty
          style={{ padding: '80px 0' }}
          imageStyle={{ width: 128 }}
          description='暂无数据'
        />}
        <Course course={course}/>
        <div className="huan">
            <div className='huan-huan'>
            <i className='iconfont icon-huanyihuan' style={{fontSize:"18px",lineHeight:"20px"}}></i>
            <span>换一换</span>
            </div>
        </div> 
    </Wrapper>
  )
}
