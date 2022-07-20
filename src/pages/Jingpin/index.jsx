import {Wrapper} from './style'
import Biaoti from '../Home/Biaoti'
import Lists from './Lists'
import Course from '../Course'
import Banner from './Banner'
import React,{useState,useEffect} from 'react'
import {useNavigate,Outlet,useParams} from 'react-router-dom'
import { actionCreators } from './store/index'
// import {getCourse} from '../../api/request';
import { Empty, PullToRefresh, List  } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload';
import Scroll from '../../components/common/Scroll'

function Jingpin(props) {
  const {getCourseDataDispatch}=props
  // console.log(props,'----')
  const {allCourses}=props;
  // console.log(allCourses.data,1111)
  // const [course,setCourse]=useState([]);
  const navigate=useNavigate()
  async function doRefresh() {
    await sleep(1000);
    // diapatch 拉取远程商品列表的 action
    getCourseDataDispatch()  
}

  useEffect(()=>{
    // console.log('--------')
    navigate(`/home/jingpin`)
  },[])
  useEffect(()=>{
    getCourseDataDispatch()
  },[])
  return (
    <PullToRefresh
    onRefresh={doRefresh}
    // refreshingText={<DotLoading color='#fe2d54'/>}
    completeText={ <h3>刷新一下 收获更多</h3>}
>


    <Wrapper>
      <Scroll className="list" onScroll={forceCheck}>
        <Banner />
        <Lists />
        <h1>超值限时抢</h1>
        {!allCourses.length&&<Empty
          style={{ padding: '80px 0' }}
          imageStyle={{ width: 128 }}
          description='暂无数据'
        />}
        <Course allCourses={allCourses}/>
        <div className="huan" id='1'>
            <div className='huan-huan' id='2'>
            <i className='iconfont icon-huanyihuan' style={{fontSize:"18px",lineHeight:"20px"}}></i>
            <span onClick={()=>{alert("该组件正在开发中，敬请期待！")}}>换一换</span>
            </div>
        </div> 
        <div id='3'></div>
        <div id='4'></div>
      </Scroll>
    </Wrapper>
    </PullToRefresh>
  )
}

const mapStateToProps=(state)=>{
  // console.log(state)
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

export default connect(mapStateToProps,mapDispatchToProps)(Jingpin)