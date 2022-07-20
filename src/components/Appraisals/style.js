import styled from "styled-components";
import style from '@/assets/global-style'

export const Wrapper=styled.div`
    margin:0.5rem;
    margin-bottom: 3rem;
    /* height:10rem; */
    h1{
        text-align: left;
        font-size:18px;
        span{
            margin:0 0.2rem;
            font-size:14px;
        }
    }
    .collected{
        color: red;
    }
    .star{
        margin:1rem 0;
        display: flex;
        align-items: end;
        color: ${style['font-color-active']};
        /* color: #f92b4f; */
        .num{
            font-size:26px;
            font-weight:700;
            font-style: italic;
        }
        span{
                margin:0 0.4rem;
                font-size:18px;
            }
    }
    .people{
        margin: 1rem 0;
    }
    .header{
        display: flex;
        flex-direction: row;
        
        img{
            height:1.8rem;
            width:1.8rem;
            border-radius:50%;
        }
        .spans{
            justify-content: start;
            .name{
                font-size:14px;
                color: #a2a2a2;
                text-align: left;
                margin-left: 0.3rem;
            }
        }
    }
    .apper{
        margin:0.5rem 1rem;
        p{
            font-size:14px;
            text-align: left;
        }
    }
    .zan{
        margin:0.5rem 0;
        display: flex;
        .date{
            flex: 1;
            justify-content: start;
            text-align: left;
            color: #9f9f9f;
            /* align-items: flex-start; */
        }
        .zan_xin{
            display: flex;
            /* margin-left:0.1rem; */
            color: #9b9b9b;
            p{
                margin-right: 0.1rem;
            }
        }
    }
    .actived{
        color: ${style['font-color-active']};
        /* color: #f92b4f; */
    }
`