import styled from 'styled-components'
import style from '@/assets/global-style'

export const Header=styled.div`
    .inphead{
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        /* margin: 20px 0; */
        color: #959595;
    }
    .s1{
        padding-left: 0.4rem;
        width: 1.4rem;
        line-height: 1.5rem;
        border-end-start-radius: 0.6rem;
        border-top-left-radius: 0.6rem;
        background-color: ${style['font-color-input-active']}; 
        /* background-color: #f3f3f3 ; */
        /* color: ${style['font-color-active']}; */
        .sousuo{
            text-align: center;
        }
    }
    .inp{
        text-align: left;
        line-height: 1.2rem;
        border-radius: 0.6rem;
        border-top-left-radius: 0;
        border-end-start-radius: 0;
        font-size:16px;
        background-color: ${style['font-color-input-active']}; 
        /* background-color: #f3f3f3; */
        border: none;
    }
    .stu{
        /* width: 25%; */
        display: flex;
        justify-content: center;
        /* align-self: stretch; */
        align-items: center;
        padding: 0 0.5rem;
        /* padding: 0 10px; */
        color: #000;
        font-weight:700;
        /* font-size: 18px; */
        i{
            font-size: 32px;
        }
        p{
            padding:0 0.2rem;
            /* padding:0 5px; */
            font-size: 18px;
        }
    }
    .biaoti{
        height: 2rem;
        width: 100%;
        display: flex;
        span{
            flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 16px;
            color : #000;
        }
        /* a{
            flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 16px;
            &.active{
                font-size:18px;
                font-weight:700;
                color: #f23053; */
                /* border:1px solid #f23053; */
            /* }
        } */
    }
`