import React,{useState,useEffect} from 'react'
import {useNavigate,Outlet,useParams} from 'react-router-dom'
import HomeDetailNav from '../../components/HomeDetailNav'
import { Wrapper } from './style'
// import { getCourse } from '../../api/request'
import {getCourse} from '../../api/request';


export default function Home() {
  const [course,setCourse]=useState([]);
  useEffect(()=>{
    (async()=>{
      let {data} = await getCourse()
      // console.log(data)
      setCourse(data)
    })()
  })
  return (
    <Wrapper>
      <HomeDetailNav />
      <Outlet />
    </Wrapper>
  )
}
