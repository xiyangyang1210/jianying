import React,{useEffect,useState,memo} from 'react'
import {useNavigate,Outlet,useParams} from 'react-router-dom'
import {Wrapper} from './style'
// import {NavBar} from 'antd-mobile'
import {getCourse} from '../../api/request';
import Img from '../../components/Img'
import Card from '../../components/Card'
import Introduction from '../../components/Introduction'
import CourseSchedule from '../../components/CourseSchedule'
import Recommended from '../../components/Recommended'
import Appraisals from '../../components/Appraisals'
import CourseFooter from '../../components/CourseFooter'
import CourseHeader from '../../components/CourseHeader'
import Scroll from '../../components/common/Scroll'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload';
// import Video from 'react-native-video';

function Coursedetail(props) {
  const {allCourses}=props;
  const {getCourseDataDispatch}=props;
  const navigate=useNavigate()
  const [course,setCourse]=useState([]);
  const [courses,setCourses]=useState([]);
  let {id}=useParams();
  
  useEffect(()=>{
    getCourseDataDispatch()
    // console.log(allCourses[id-1],'+++')
  },[])
useEffect(()=>{
  (async()=>{
    let {data} = await getCourse()
    // console.log(data[id-1].header,'---')
    // console.log(id,'---')
    setCourses(data[id-1])
    // console.log(data[id-1])
    setCourse(data[id-1].header)
    // console.log(course)
    // const {id}=course
    // console.log([...id])
  })()
})
    
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
      {/* <NavBar onBack={()=>navigate(-1)} style={{position:'fixed'}}>详情</NavBar> */}
      {/* <CourseHeader allCourses={allCourses}></CourseHeader> */}
      <CourseHeader course={course}></CourseHeader>
      <Img allCourses={allCourses}></Img>
      {/* <Card allCourses={allCourses}></Card> */}
      <Scroll className="list" onScroll={forceCheck}>
        <Card courses={courses}></Card>
        {/* <Introduction allCourses={allCourses}></Introduction> */}
        <Introduction courses={courses}></Introduction>
        <CourseSchedule></CourseSchedule>
        <Recommended allCourses={allCourses}></Recommended>
        <Appraisals></Appraisals>
      </Scroll>
      {/* <CourseFooter allCourses={allCourses}></CourseFooter> */}
      <CourseFooter courses={courses}></CourseFooter>
    </Wrapper>
  )
}

const mapStateToProps=(state)=>{
  // console.log(state,'2222')
  return{
    allCourses:state.Jingpin.allCourses
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getCourseDataDispatch(){
      dispatch(actionCreators.getCourseList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(Coursedetail))