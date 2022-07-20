import styled from 'styled-components'

export const Wrapper=styled.div`
    margin-top:2.3rem;
    height: 12rem;
    width: 18.75rem;
    .video_play{
        height: 12rem;
        width: 18.75rem;
    }
    .video-js .vjs-duration, .vjs-no-flex .vjs-duration {
  display: inline-block;
}
.video-js .vjs-current-time, .vjs-no-flex .vjs-current-time {
  display: inline-block;

}
    .vid{
        /* width:10%; */
        height:12rem;
        position:absolute;
        width:100%;
        /* height:1080px; */
        video{
            /* max-height: 100%;
            max-width: 100%; */
            width: 100% !important;
            height: 12rem;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -9999;
            object-fit: fill;
        }
    }
    img{
        margin:auto;
        max-height: 100%;
        max-width: 100%;
    }
`