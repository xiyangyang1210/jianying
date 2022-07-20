import React, { memo,useEffect } from 'react'
import { NavBar, Space, Toast,List, Switch } from 'antd-mobile'
import {Wrapper} from './style'
import {useNavigate,Outlet,useParams,Link} from 'react-router-dom'
import { actionCreators } from '../Coursedetail/store/index'
import { connect } from 'react-redux'

function Wode(props) {
    const navigate=useNavigate()
    const {allCourses}=props;
    const {getCourseDataDispatch}=props;
    useEffect(()=>{
      getCourseDataDispatch()
      // console.log(allCourses,'+++')
    },[])
  return (
    <Wrapper>
      <NavBar onBack={()=>navigate('/home')}>学习中心</NavBar>
      <List header=''>
        <List.Item onClick={() => {}} style={{fontSize:"16px"}}>
          <i className='iconfont icon-zuijinyuedu'></i>
          最近学习
        </List.Item>
        <div className="course">
      {
        allCourses&&allCourses.map(
            item=>(
                <div className="course-flex" key={item.id}>
                    <Link
                        className='course-List'
                        to={`/coursedetail/${item.id}`}
                        key={item.id}
                    >
                        <div className="course-Box">
                            <div className="course-Img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="course-Content">
                                  <div className="course_header">{item.header}</div>                                                               
                            </div>
                        </div>
                    </Link>
                </div>
            )
        )
      }
      </div>
        <List.Item onClick={() => {alert("该组件正在开发中，敬请期待！")}} style={{fontSize:"16px"}}>
          <i className='iconfont icon-shoucang'></i>
          我的收藏
        </List.Item>
        <List.Item onClick={() => {alert("该组件正在开发中，敬请期待！")}} style={{fontSize:"16px"}}>
          <i className='iconfont icon-gouwuche'></i>
          已购课程
        </List.Item>
        <List.Item onClick={() => {alert("该组件正在开发中，敬请期待！")}} style={{fontSize:"16px"}}>
          <i className='iconfont icon-dazuoye'></i>
          作业与练习
        </List.Item>
        <List.Item onClick={() => {alert("该组件正在开发中，敬请期待！")}} style={{fontSize:"16px"}}>
          <i className='iconfont icon-youhuiquan1'></i>
          我的优惠券
        </List.Item>
      </List>
      
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
  // console.log('111')
  return{
    getCourseDataDispatch(){
      dispatch(actionCreators.getCourseList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Wode))
