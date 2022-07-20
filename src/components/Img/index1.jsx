import React,{ useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import {Wrapper} from './style'

export default function Img(props) {
  const {allCourses}=props
  const {id}=useParams()
  // console.log(allCourses[id-1])
  const videoRef = useRef(null)
    const [play, setPlay] = useState(false);
    // function componentDidMount(){
      const onVideo = () => {
        if (play) {
          videoRef.current.pause();
          setPlay(false)
      }
      else {
          videoRef.current.play();
          setPlay(true)
      }
  }
    // }
    // componentDidMount()

  return (
    <Wrapper>
      <div className="vid">
      {
        allCourses&&allCourses.map(
          item=>(
            item.id!=id?'':
          <video
          loop
          onClick={onVideo()}
          ref={videoRef}

          // ref={videoRef}
          // autoplay="autoPlay"
          src={item.video}
          key={item.id}
          >
          </video>
          )
        )
      }
      </div>
    </Wrapper>
  )
}
