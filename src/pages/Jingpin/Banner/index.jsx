import React,{useEffect} from 'react'
import  Swiper  from 'swiper'
// import 'swiper/css';
import {Wrapper} from './style'
import img1 from '../../../assets/images/1.webp'
import img2 from '../../../assets/images/2.jpg'

// https://p6-magic.byteimg.com/tos-cn-i-tokbwntzau/628b2b8d0e5343035496fc6e/e88e687c40af52b77861530033763478~tplv-tokbwntzau-perf:0:0:q75.image?size=1920x727&magic_type=image_jpeg
// https://p9-magic.byteimg.com/tos-cn-i-tokbwntzau/62946845a5cb9d0343f63f6c/a9e67da81bac4ac2a2e99accd501f2f2~tplv-tokbwntzau-perf:0:0:q75.webp?size=1920x727&magic_type=image_jpeg
export default function Banner() {
    useEffect(() => {
        new Swiper('.home_info_banner',{
            loop:true,
            autoplay: {
                delay:3000
            }
        })
    },[])
  return (
    <Wrapper>
      <div className="home_info_img">
      <div className="home_info_banner swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                
                    <img src={img1} alt="" width="100%" />
                
            </div>
            <div className="swiper-slide">
                
                    <img src={img2} alt="" width="100%" />
               
            </div>
            {/* <div className="swiper-slide">
                <p>
                    <img src="https://p3-magic.byteimg.com/tos-cn-i-tokbwntzau/6295d50fbb5eb40352557e0e/ee2326c37a5557fc0d9a0ecc48b1a81a~tplv-tokbwntzau-perf:0:0:q75.image?size=1920x649&magic_type=image_jpeg" alt="" width="100%" />
                </p>
            </div> */}
            {/* <div className="swiper-slide">
                <p>
                    <img src="https://p3-magic.byteimg.com/tos-cn-i-tokbwntzau/6170ddbb0894b4033485db8a/8af265cc0e18be30fb5846b5c5576b24~tplv-tokbwntzau-perf:0:0:q75.image?size=1920x504" alt="" width="100%" />
                </p>
            </div> */}
            {/* <div className="swiper-slide">
                <p>
                    <img src="https://p3-magic.byteimg.com/tos-cn-i-tokbwntzau/6225b76a485f62033f5a7428/28b3ab6d66e1ffd823cda8bf7bcc8cac~tplv-tokbwntzau-perf:0:0:q75.image?size=1920x620&magic_type=image_png" alt="" width="100%" />
                </p>
            </div> */}
        </div>
        <div className="swiper-pagination"></div>
            {/* <div className="getAptitude"><p></p></div> */}
      </div>
      </div>
    </Wrapper>
  )
}
// export default function Banner() {
//     useEffect(() => {
//         new Swiper('.home_info_banners',{
//             loop:true,
//             autoplay:{
//                 delay:3000
//             }
//         })
//     },[])
//   return (
//     <Wrapper>
//         <div className="home_info_img">
//             <div className="home_info_setmeal">
//                 <div className="home_info_setmeal_title">
//                     <h3>品质套餐</h3>
//                     <p>搭配齐全吃的好</p>
//                     <span>立即抢购</span>
//                 </div>
//                 <div className="home_info_setmeal_img">
//                     <img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png" alt=""/>
//                 </div>
//             </div>
//             <div className="home_info_vip">
//                 <div className="home_info_vip_title">
//                     <img src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg" alt=""/>
//                     <span>超级会员</span>
//                     <span>每月领9元福利</span>
//                 </div>
//                 <div className="home_info_vip_door">
//                     <p>立即开通&gt;</p>
//                 </div>
//             </div>
//             <div className="home_info_banners swiper-container">
//                 <div className="swiper-wrapper">
//                     <div className = "swiper-slide">
//                         <p>
//                             <img width="100%" src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg" alt=""/>
//                         </p>
//                     </div>
//                     <div className="swiper-slide">
//                         <p>
//                             <img width="100%" src="https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg" alt=""/>
//                         </p>
//                     </div>
//                     <div className="swiper-slide">
//                         <p>
//                             <img width="100%" src="https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg" alt=""/>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="swiper-pagination"></div>
//                 <div className="getAptitude"><p>资质证照</p></div>
//             </div>
//         </div>
//     </Wrapper>
//   )
// }