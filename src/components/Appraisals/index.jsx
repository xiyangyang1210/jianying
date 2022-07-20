import React, { useEffect,useState } from 'react'
import {Wrapper} from './style'
import { Rate, Space, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { actionCreators } from "./store/index";
import classNames from "classnames";

function Appraisals(props) {
  const {commonList}=props
  const {getCommonDataDispatch,changeZan}=props
  // const [hasCollect, setHasCollect] = useState(false);
  const [start,setStart]=useState();
  // setStart(item)
  
  const setZan=(id)=>{
    // console.log(id,'1234')
    changeZan(id)
    let anchorElement=document.getElementsByClassName("icon-dianzan")[id-1]
    // console.log(anchorElement);
    anchorElement.classList.toggle("collected")
  }
  useEffect(()=>{
    getCommonDataDispatch()
   
  },[])
 
  return (
    <Wrapper>
      <h1>学员评价<span>(26)</span></h1>
      <div className="star">
        <div className="num">4.9</div>
        <span>推荐学习</span>
        <Rate allowHalf readOnly value={4.5} 
        style={{
          '--star-size': '18px',}}
        />
      </div>
      
      <div className="commen">
      {
         commonList&&commonList.map(
          item=>(
            <div className="people" key={item.id}>
              <div className="header">
                  <img src={item.img} alt="" />
                <div className="spans">
                  <div className="name">{item.name}</div>
                  <Rate allowHalf readOnly value={5} 
                  style={{
                    '--star-size': '14px',}}
                  />
                </div>
              </div>
              <div className="apper">
                <p>{item.common}</p>
                <div className="zan">
                  <div className="date">{item.date}</div>
                  <div className="zan_xin">
                    <p>{item.state?item.zan:item.zan*1 - 1 }</p>
                    <i className="iconfont icon-dianzan" onClick={()=>setZan(item.id)}></i>
                    {/* <i className={classNames("iconfont icon-dianzan",hasCollect && "collected")}
                      onClick={() => setHasCollect(!hasCollect)}
                    ></i> */}
                  </div>
                </div>
              </div>
            </div>
          )
        )
      }
      </div>
      
    </Wrapper>
  )
}

const mapStateToProps=(state)=>{
  // console.log(state)
  return{
    commonList:state.Appraisals.commonList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getCommonDataDispatch(){
      dispatch(actionCreators.getCommonList())
    },
    changeZan(data){
      dispatch(actionCreators.changeZanList(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Appraisals)
