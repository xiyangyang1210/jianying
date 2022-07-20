import React,{ useState, useRef,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Wrapper} from './style'
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Img(props) {
  const {allCourses}=props
  const {id}=useParams()
//   function disVideo() {
//     var videoList = document.getElementById('videos'); // 找到所有的video
//     // if(videoList.length > 0) { // 判断是否有video
//     //     for(var i = 0; i < videoList.length; i++) { // 循环销毁
//             videojs(videoList).dispose();
//     //     }
//     // }else{
//     //     return false;
//     // }
// }
  // useEffect(()=>{
  //   const players = setTimeout(videojs(
  //     videoRef.current),10000);
  //       players.dispose()
  // })
  // useEffect(()=>{
  //   const player=videojs(videoRef.current);
  //   player.dispose()
  // },[])
//   componentWillUnmount() {

//     if (this.player) {

//         this.player.dispose();

//     }

// }

  

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [option, setOptopm] = useState({});

  const onReadyPlay = (palyer) => {
    videoRef.current = palyer
    palyer.play();
  }
  const init = () => {
    let _option = {
      controls: true,
      autoplay: false,//加载完成是否自动播放
      loop: false,//视频播放结束后，是否循环播放
      notSupportedMessage: '此视频暂无法播放，请稍后再试',
      poster: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',//视频封面
      controlBar: {
        timeDivider: true,//是否显示时间控制条，默认为true
        remainingTimeDisplay: false,//是否显示剩余时间，默认为true
        // fullscreenToggle: true, // 全屏按钮
        children: [//自定义
          { name: 'playToggle' }, // 播放按钮
          {
            name: 'volumePanel', // 音量控制
            inline: false, // 不使用水平方式
          },
          {
            // 倍数播放
            name: 'playbackRateMenuButton',
            playbackRates: [0.5, 1, 1.5, 2, 2.5],
          },

          { name: 'currentTimeDisplay' }, // 当前已播放时间
          { name: 'durationDisplay' }, // 总时间
          { name: 'progressControl' }, // 播放进度条
          {
            name: 'pictureInPictureToggle'//支持画中画
          },
          {
            name: 'FullscreenToggle'//支持全屏
          }
        ]
      }

    }
    setOptopm(_option);

    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, _option, () => {
      });
      onReadyPlay(player)
    }
  }

  useEffect(() => {
    init();
  }, [])
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
              key={item.id}
                className="video-js vjs-big-play-centered" 
                id='videos'>
                <source src={item.video} type="video/mp4" />
                    
                {/* <source src={`https://videos.36krcdn.com/20220704/v2_1656941846022_video_mp4_v9`} type="video/mp4" /> */}
                {/* <source src={`https://live-s3m.mediav.com/nativevideo/2a80d171cc7ef2c764c9a83c06e0e4bc-bit_cloud768.mp4`} type="video/mp4" /> */}
              </video>
            )
          )
        }
      
    </div>
      {/* <div className="vid">
      {
        allCourses&&allCourses.map(
          item=>(
            item.id!=id?'':
          <video
          loop
          // controls="controls"
          onClick={onVideo}
          ref={videoRef}
          autoplay="autoPlay"
          src={item.video}
          key={item.id}
          >
          </video>
          )
        )
      }
      </div> */}
      {/* <iframe src="//player.bilibili.com/player.html?aid=59317437&bvid=BV1Pt411G7qh&cid=103365806&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> */}

      {/* <img src="https://lf-cdn-tos.bytescm.com/obj/static/ies/ulike/web/resource/fe_official/imgs/img_app_3.23716e88.jpg" alt="" /> */}
    </Wrapper>
  )
}
