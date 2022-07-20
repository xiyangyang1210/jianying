import React, { useEffect, useState } from 'react'
import {Wrapper} from './style'
import { Divider,Checkbox,Popup,Toast  } from 'antd-mobile'
import Pay from '../Pay'

export default function BuyTab(props) {
    const {onClose,courses}=props
    const [open, setOpen] = useState(false)
    const [visible1, setVisible1] = useState(false)
    // const [ischecked,setchecked]=useState(true)
    const {box,setBox}=useState(false)
    const onClosePay=useState(false);
    const money=courses.price;
    // console.log(money)
    // const [money,setMoney]=useState(courses.price)
    // console.log(courses.price)
    // console.log(courses,'11111')   
    // useEffect(()=>{
    //   console.log(ischecked)
    // }) 
    const toggle = () => {
      // setOpen(!open)
      console.log(111)
  }
  const checked=()=>{
    return setVisible1(true) || alert("请勾选协议")
  }
  return (
    <Wrapper>
      <div className="headers">
            <h1>确认购买</h1>
            <div className="close">
                <i className='iconfont icon-guanbi font-close' onClick={onClose}></i>
            </div>
      </div>
      <div className="course">
        <div className="course-Img">
            <img src={courses.img} alt="" />
            <div className="get-Course">
                <p>{courses.coursenum}节课</p>
            </div>
        </div>
        <div className="course-words">
            <div className="header">
                <h2>{courses.header}</h2>
                <h3>{courses.people}</h3>
                <h4>{courses.name}</h4>
            </div>
        </div>
      </div>
      <div className="price">
        <div className="course_price">
            <span>商品原价</span>
            <span className='p1'>￥{courses.low_price}</span>
        </div>
        <div className="course_price">
            <span>超值立减</span>
            <span>-￥{courses.low_price-courses.price}</span>
        </div>
        <Divider />
        <div className="course_price">
            <span>支付金额</span>
            <div className='course_price_discounts'>
                <div className='price_now'>￥{courses.price}</div>
                <div className='price_discounts'>共优惠￥{courses.low_price-courses.price}</div>
            </div>
        </div>
        <Divider />
        <div className="course_price">
            <span>使用兑换码</span>
            <i className='iconfont icon-xiayiyeqianjinchakangengduo'></i>
        </div>
        <Divider />
        <div className="course_know">
            <h1>购买须知</h1>
            <ol>
                <li>1.本内容为付费内容，购买后可获得永久访问权</li>
                <li>2.本内容为虚拟服务，已购买内容不可退款转让</li>
                <li>3.购买后，可在“学习中心-已购课程”中查看</li>
            </ol>
        </div>
        <button onClick={() => {
            if(open==true){
              setVisible1(true)
            }else{
              Toast.show({
                content: '请先勾选协议',
                afterClose: () => {
                  console.log('after')
                },
              })
            }
            // open&&setVisible1(true)
          }}>立即购买</button>
        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false)
          }}
          bodyStyle={{ minHeight: '60vh' }}
        >
          <Pay onClosePay={()=>setVisible1(false)} money={money}/>
        </Popup>
        
              
        <div className="read">
        <div
            onClick={() => {
              setOpen(!open)
            }}
          >
            <Checkbox style={{
            '--icon-size': '18px',
            '--font-size': '14px',
            '--gap': '6px',
          }} className="check" onClick={toggle}></Checkbox>
          </div>
            
          {/* <input type="radio" className='ischeck' onClick={toggle}/> */}
            <span>我已阅读并同意《剪映付费内容购买协议》</span>
        </div>
      </div>
    </Wrapper>
  )
}
