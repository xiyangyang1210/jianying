import React,{useEffect,useState} from 'react'
import {Wrapper} from './style'
import {NavBar,Popup, Space, Button} from 'antd-mobile'
import {useNavigate,Outlet,useParams} from 'react-router-dom'
import classNames from "classnames";
import { debounce } from "@/api/utils";
import p1 from '../../assets/images/p1.jpg'
import p2 from '@/assets/images/p2.jpg'
import p3 from '@/assets/images/p3.jpg'
import p4 from '@/assets/images/p4.jpg'
import './style.css'
export default function CourseHeader({course}) {
  const [visible, setVisible] = useState(false)
  const [show,setShow]=useState(true)
  const [active,setActive]=useState(true)
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
    useEffect(()=>{
      const debounceAjax=debounce(handleScroll,50)
      // debounce(window.addEventListener('scroll',handleScroll),500)
      window.addEventListener('scroll',debounceAjax)
      window.addEventListener('scroll',handleScrollTop)
      function handleScrollTop(){
        const top = document.documentElement.scrollTop //获取scroll偏移值
        if(top>10){
          setShow(false)
          // setActive()
          if(top<800){
            
          }
        }else{
          setShow(true)
        }
      }
      function handleScroll(){
        // const top = document.documentElement.scrollTop //获取scroll偏移值
        const span1=document.getElementById("1")
        // const el = document.getElementById('do-not-exist');
        // console.log(el);
        // el.classList.toggle(null);
        // const span1=document.getElementById("nonexisting")
        const span2=document.getElementById("2")
        const span3=document.getElementById("3")
        const span4=document.getElementById("4")
        // const span=document.geyElementById('nonexisting')
        // while(span1&&span2&&span3&&span4){
        //   span1.classList.toggle("actived"||null,window.scrollY<400)
        // span2.classList.toggle("actived",window.scrollY>=400 && window.scrollY<940)
        // span3.classList.toggle("actived",window.scrollY>=940 && window.scrollY<1100)
        // span4.classList.toggle("actived",window.scrollY>1100)
        // }
        span1.classList.toggle("actived",window.scrollY<400)
        span2.classList.toggle("actived",window.scrollY>=400 && window.scrollY<940)
        span3.classList.toggle("actived",window.scrollY>=940 && window.scrollY<1100)
        span4.classList.toggle("actived",window.scrollY>1100)
            // if(top>10){
            //   setShow(false)
            //   // setActive()
            //   if(top<800){
                
            //   }
            // }else{
            //   setShow(true)
            // }
        }
       },[])
       const scrollToAnchor=(anchorName)=>{
        console.log('1234')
        if(anchorName){
            let anchorElement=document.getElementById(anchorName)
            console.log(anchorElement,'1234')
            if(anchorElement){
                anchorElement.scrollIntoView({
                    block:'start',
                    behavior: 'smooth'
                })
            }
        }
    }
    const setLoaction=(id)=>{

    }
  return (
    <Wrapper>
      <NavBar onBack={()=>navigate('/home')} style={{textAlign:"center"}}>
        {
          !course.length && <div>详情</div>
        }
        {
          course
        }
      </NavBar>
      <div className='btn'>
      <Space direction='vertical'>
          <>
            <Button style={{border:"none",width:"0px",height:'0px',top:"-0.5rem",right:"0.25rem"}}
              onClick={() => {
                setVisible(true)
              }}
            >
              <i className='iconfont icon-fenxiang'></i>
            </Button>
            <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '15vh',
              }}
              className="popup"
            >
               <div className='pic'>
              <a href="#">
                <img src="src/assets/images/p1.jpg" alt="" />
                <span>微信</span>
                </a>
              <a href="#">
                <img src="src/assets/images/p2.jpg" alt="" />
                <span>朋友圈</span>
                </a>
              <a href="#">
                <img src="src/assets/images/p3.jpg" alt="" />
                <span>QQ</span>
                </a>
              <a href="#">
                <img src="src/assets/images/p4.jpg" alt="" />
                <span>QQ空间</span>
                </a>
              {/* <a href="#">
                <img src={p5} alt="" />
                <span>微博</span>
                </a> */}
              </div>    
              {/* <div className="p">
                <p style={{margin:"0.5rem", fontSize: "28px"}}>分享至朋友圈</p>
                <p style={{margin:"0.5rem",fontSize: "28px"}}>分享至微信好友</p>
                <p style={{margin:"0.5rem",fontSize: "28px"}}>分享至QQ</p>
                <p style={{margin:"0.5rem",fontSize: "28px"}}>分享至QQ空间</p>
              </div> */}
            </Popup>
          </>
        </Space>
        {/* <i className='iconfont icon-fenxiang'></i> */}
      </div>
      {/*  */}
      <div className={`banner ${show===true?"header_bg":null}`}>
        <span onClick={() => window.scrollTo(0, 0)} id="1">简介</span>
        <span onClick={() => window.scrollTo(0, 430)} id="2">课程</span>
        <span onClick={() => window.scrollTo(0, 940)} id="3">推荐</span>
        <span onClick={() => window.scrollTo(0, 1400)} id="4">评价</span>
      </div>
    </Wrapper>
  )
}
