import styled from "styled-components";
import style from '@/assets/global-style'

export const Wrapper=styled.div`
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
    /* height:5rem; */
    /* width:18.75rem; */
    width: 100%;
    background-color: #fff;
    border: 1px solid #f7f7f7;
    .btn{
        position: fixed;
        height: 1.5rem;
        top: 0.35rem;
        right:0.9rem;
        /* border: none; */
        i{
            /* top:0.2rem; */
            font-size: 30px;
        }
        span{
            font-size:18px;
        }
        
    }
    .p{
        margin:0.5rem;
    }
    .banner{
        /* display: none; */
        /* visibility: hidden; */
        display: flex;
        height: 2rem;
        line-height:2rem;
        font-size: 18px;
        justify-content: space-around;
        span{
            &:active::after{
                
            background-color: ${style['font-color-active']};
            /* background-color: #ec2e5a; */
            width:10rem;
            height: 11rem;
            position: absolute;
            top: 10px;
            /* top: 3rem; */
            /* bottom: 0; */
            /* left: 0.8rem; */
            /* right: 0; */
            margin-left: auto;
            margin-right: auto;
            }
        }
    }
    .header_bg{
        display: none;
    }
    .actived{
        background-color: ${style['font-color-active']};
        /* background-color: #ec2e5a; */
        /* width:1rem; */
        height: 0.1rem;
        /* position: absolute; */
        /* top: 3rem; */
        /* bottom: 0; */
        /* left: 0.8rem; */
        /* right: 0; */
        /* margin-left: auto; */
        /* margin-right: auto; */
    }
    
    
`