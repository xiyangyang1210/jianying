import styled from "styled-components";

export const Wrapper=styled.div`
    /* height:80rem; */
    /* background-color: pink; */
    .headers{
        height: 2rem;
        /* background-color: pink; */
        line-height:2rem;
        h1{
            text-align: center;
            font-size:20px;
        }
        .close{
            position:fixed;
            top:0rem;
            right: 0.5rem;
        }
    }
    .course{
        display: flex;
        margin:0.5rem;
        /* height:19.616rem; */
        /* background-color: pink; */
        .course-Img{
            width:6rem;
            
            /* background-color: pink; */
            img{
                border-radius: 0.2rem;
                max-height: 100%;
                max-width: 100%;
            }
            .get-Course{
                position: absolute;
                height:1rem;
                top: 4.9rem;
                left: 3.75rem;
                font-size:14px;
                line-height:1rem;
                
                z-index: 10;
                padding:0 0.4rem;
                /* padding:0 8px; */
                border-radius: 0.15rem;
                /* border-radius: 3px; */
                background: rgba(20, 20, 20,.4);
                color: #fff;
            }
        }
        
        .course-words{
            flex: 1;
            margin-left: 0.3rem;
            h2{
                font-size:18px;
                /* margin-top:0.5rem; */
            }
            h3{
                font-size:14px;
                margin-top:0.3rem;
            }
            h4{
                font-size:14px;
                margin-top:0.5rem;
            }
        }
    }
    .course_price{
        display: flex;
        justify-content: space-between;
        margin:0.5rem;
        color: #5f5f5f;
        font-size:18px;
        span{
            color: #000;
        }
        .course_price_discounts{
            color: #f92d50;
            .price_now{
                text-align: end;
            }
            .price_discounts{
                font-size:14px;
            }
        }
    }
    .course_know{
        margin:0.5rem;
        h1{
            font-size:18px;
        }
        li{
            margin:0.1rem;
        }
    }
    button{
        margin:0.5rem;
        width:95%;
        height:1.8rem;
        border-radius: 0.1rem;
        border: none;
        background-color: pink;
    }
    .read{
        display: flex;
        justify-content: center;
        text-align: center;
        .ischeck{
            margin:0 0.5rem;
        }
    }
`