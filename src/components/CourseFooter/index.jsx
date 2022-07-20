import React,{useState} from 'react'
import {Wrapper} from './style'
import classNames from "classnames";
import { Popup, Space, Button } from 'antd-mobile'
import BuyTab from '../BuyTab'

export default function CourseFooter({courses}) {
  const [hasCollect, setHasCollect] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const onClose=useState(false);
  return (
    <Wrapper>
      <div className={classNames("star collect tab-item",hasCollect && "collected")}>
        <i className='iconfont icon-shoucang icon-stars'></i>
        <span className="item-font" onClick={() => setHasCollect(!hasCollect)}>
        {hasCollect ? "已收藏" : "收藏"}
    </span>
      </div>
      <div className="shopping">
        {/* 立即购买 */}
        <Button className='btn'
              onClick={() => {
                setShowTab(true)
              }}
            >
              立即购买
            </Button>
        <Popup
          visible={showTab}
          onMaskClick={() => {setShowTab(false)}}
          bodyStyle={{ height: "70vh" }}>
          {/* // 将商品配置组件的隐藏函数传递给该组件 */}
          {<BuyTab onClose={()=>setShowTab(false)}  courses={courses}/>}
      </Popup>
      </div>
    </Wrapper>
  )
}
