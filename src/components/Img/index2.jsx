import React,{ useState, useRef,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Wrapper} from './style'
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Img(props) {
  const {allCourses}=props
  const {id}=useParams()
  const videoRef = useRef(null);
  useEffect(() => {
    const player = setTimeout(videojs(
      videoRef.current,
      {
        autoplay: false, // 自动播放
        muted: false, //静音
        preload: 'auto', // 预加载
        controls: true, // 是否显示控制条
        controlBar: {
          // 设置控制条组件
          // /* 设置控制条里面组件的相关属性及显示与否
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true, // 显示倒计时时间
          fluid: true,
          language: 'zh-CN', // 设置语言
          volumePanel: {
            inline: false,
          },
          // */
          /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
          children: [
            { name: 'playToggle' }, // 播放按钮
            { name: 'currentTimeDisplay' }, // 当前已播放时间
            { name: 'progressControl' }, // 播放进度条
            { name: 'durationDisplay' }, // 总时间
            {
              // 倍数播放
              name: 'playbackRateMenuButton',
              playbackRates: [0.5, 1, 1.5, 2, 2.5],
            },
            {
              name: 'volumePanel', // 音量控制
              inline: false, // 不使用水平方式
            },
            { name: 'FullscreenToggle' }, // 全屏
          ],
        },
      },
      // () => {
      //   player.src(props.video);
      //   player.poster(props.photo);
      // },
    ),5000);
    // return () => {
    //   player.dispose();
    // };
  },[]);
  return (
    <Wrapper>
        <div className="video_play">
        {
           allCourses&&allCourses.map(
             item=>(
               item.id!=id?'':
            <video
              style={{
                width: "18.75rem",
                height: "12rem"
              }}
              ref={videoRef}
              preload="true"
              // className={styles.videoContent}
              className={['video-js', 'vjs-16-9', 'vjs-big-play-centered'].join(' ')}
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>
             ))}
             </div>
             </Wrapper>
  );


  // return (
  //   <Wrapper>
  //      <div className="video_play">
  //       {
  //         allCourses&&allCourses.map(
  //           item=>(
  //             item.id!=id?'':
  //             <video style={{
  //               width: "18.75rem",
  //               height: "12rem"
  //             }} ref={videoRef}
  //             key={item.id}
  //               className="video-js vjs-big-play-centered" 
  //               id='videos'>
  //               <source src={item.video} type="video/mp4" />
                    
  //               {/* <source src={`https://videos.36krcdn.com/20220704/v2_1656941846022_video_mp4_v9`} type="video/mp4" /> */}
  //               {/* <source src={`https://live-s3m.mediav.com/nativevideo/2a80d171cc7ef2c764c9a83c06e0e4bc-bit_cloud768.mp4`} type="video/mp4" /> */}
  //             </video>
  //           )
  //         )
  //       }
      
  //   </div>
  //     {/* <div className="vid">
  //     {
  //       allCourses&&allCourses.map(
  //         item=>(
  //           item.id!=id?'':
  //         <video
  //         loop
  //         // controls="controls"
  //         onClick={onVideo}
  //         ref={videoRef}
  //         autoplay="autoPlay"
  //         src={item.video}
  //         key={item.id}
  //         >
  //         </video>
  //         )
  //       )
  //     }
  //     </div> */}
  //     {/* <iframe src="//player.bilibili.com/player.html?aid=59317437&bvid=BV1Pt411G7qh&cid=103365806&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> */}

  //     {/* <img src="https://lf-cdn-tos.bytescm.com/obj/static/ies/ulike/web/resource/fe_official/imgs/img_app_3.23716e88.jpg" alt="" /> */}
  //   </Wrapper>
  // )
}
