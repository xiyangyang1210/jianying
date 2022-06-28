import React,{useEffect} from 'react'
import Banner from '../../pages/Jingpin/Banner'
import Lists from '../../pages/Jingpin/Lists'
import Course from '../../pages/Course'
import Biaoti from '../../pages/Home/Biaoti'
// import propTyes from 'prop-types'
import { Link,NavLink } from 'react-router-dom'
import Swiper from 'swiper'
import {Wrapper} from './style'
export default function HomeDetailNav(){
    let homeNavs = [
        { id: 1, desc: '推荐', path: '/tuijian'},
        { id: 2, desc: '免费专区', path: '/mianfei'},
        { id: 3, desc: '精品课', path: '/jingpin'},
        { id: 4, desc: '直播', path: '/zhibo'},
        { id: 5, desc: '拍剪教学', path: '/jianpai'},
    ]
    return(
        <Wrapper >
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                {
                    homeNavs.map((item, index) => {
                        return (
                            <NavLink
                                index={index}
                                to={`/home${item.path}`}
                                key={item.id}
                                className="nav-item swiper-slide"
                            >
                            {item.desc}
                            </NavLink>
                        )
                    })
                }
                </div>
            </div>
        {/* <Biaoti/>
        <Banner />
        <Lists />
        <h1>超值限时抢</h1>
        <Course course={course}/>
        <div className="huan">
            <div className='huan-huan'>
            <i className='iconfont icon-huanyihuan' style={{fontSize:"18px",lineHeight:"20px"}}></i>
            <span>换一换</span>
            </div>
        </div>  */}
    </Wrapper>
    )
}
