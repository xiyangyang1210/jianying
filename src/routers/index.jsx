import { useState, lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
const Course = lazy(() => import('../pages/Course'))
const Jianji = lazy(() => import('../pages/JianJi'))
const Mine = lazy(() => import('../pages/Mine'))
const News = lazy(() => import('../pages/News'))
const TongKuan = lazy(() => import('../pages/Tongkuan'))
const Jianpai = lazy(() => import('../pages/Jianpai'))
const Mianfei = lazy(() => import('../pages/Mianfei'))
const Tuijian = lazy(() => import('../pages/Tuijian'))
const Zhibo = lazy(() => import('../pages/Zhibo'))
const Jingpin = lazy(() => import('../pages/Jingpin'))
const Coursedetail=lazy(()=>import('../pages/Coursedetail'))

// Routes 不能和react-router-dom 一样
const RoutesConfig = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='/' element={<Jingpin/>}/>
            </Route>
            <Route path='/jianji' element={<Jianji/>}></Route>
            <Route path='/tongkuan' element={<TongKuan/>}></Route>
            <Route path='/home' element={<Home/>}>
                {/* 二级路由 */}
                <Route path='/home/tuijian' element={<Tuijian/>}/>
                <Route path='/home/mianfei' element={<Mianfei/>}/>
                <Route path='/home/jingpin' element={<Jingpin/>}/>
                <Route path='/home/' element={<Jingpin/>}/>
                <Route path='/home/zhibo' element={<Zhibo/>}></Route>
                <Route path='/home/jianpai' element={<Jianpai/>}/>
            </Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/mine' element={<Mine/>}></Route>
            <Route path='/coursedetail/:id' element={<Coursedetail/>}></Route>
        </Routes>
    )
}

export default RoutesConfig