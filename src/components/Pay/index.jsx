import React, { useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { Wrapper } from './style'
import { Divider,Checkbox,Button,Dialog, Space, Toast  } from 'antd-mobile'

export default function Pay(props) {
    const navigate=useNavigate()
    const {onClosePay,money}=props
    const [ischecked,setChecked]=useState(false);
    let {id}=useParams();
    const pullbuy=(item)=>{
      Toast.show({ content: '已支付', position: 'bottom' })
      changeCartListDispatch(item)
      navigate(`/wode`)
    }
    const changeCartListDispatch=(item)=>{
      console.log("购买成功")
    }
    // console.log(id,'+++');
    // const [open, setOpen] = useState(false)
  return (
    <Wrapper>
        <div className="headers">
               <h1>支付</h1>
               <div className="close">
                   <i className='iconfont icon-guanbi font-close' onClick={onClosePay}></i>
               </div>
           </div>
           <Divider />
        <div className="pay">
            <div className="paymoney">
                <p>￥</p><span>{money}.00</span>
            </div>
            <div className="word">购买订单</div>
        </div>
        <div className="pay_way">
            <i className='iconfont icon-weixin wx'></i>
            <label htmlFor="radio1"><span>微信支付</span></label>
            <input type="radio" name="type" value="wx" id="radio1" defaultChecked/>
        </div>
        <Divider />
        <div className="pay_way">
            <i className='iconfont icon-zhifubao zfb'></i>
            <label htmlFor="radio2"><span>支付宝支付</span></label>
            <input type="radio" name="type" value="zfb" id="radio2"/>
        </div>
        <Divider />
      {/* {money} */}
      <div className="btns">
        <Button block className='btn' size='large' onClick={async () => {
              const result = await Dialog.confirm({
                content: '确定支付吗',
              })
              if (result) {
                // Toast.show({ content: '已支付', position: 'bottom' })
                // changeCartListDispatch(item)
                pullbuy()
                // 要换成课程
                &&navigate(`/wode`)
                // &&navigate(`/wode`)
              } else {
                Toast.show({ content: '取消支付', position: 'bottom' })
              }
          //  console.log(1)
          }}>
            确认支付
        </Button>
      </div>
    </Wrapper>
  )
}
