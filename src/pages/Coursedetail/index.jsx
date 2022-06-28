import React,{useEffect} from 'react'
import {useNavigate,Outlet,useParams} from 'react-router-dom'
import {Wrapper} from './style'
import {NavBar} from 'antd-mobile'
// import Video from 'react-native-video';

export default function Coursedetail() {
    const navigate=useNavigate()
    let {id}=useParams();
    // console.log(id);
    if(!id){
      navigate('/home');
      return;
    }
    useEffect(()=>{
    //   console.log('--------')
      navigate(`/coursedetail/${id}`)
    },[])
  return (
    <Wrapper>
      <NavBar onBack={()=>navigate(-1)}>详情</NavBar>
      
    </Wrapper>
  )
}
