import styled from "styled-components";

export const Wrapper=styled.div`
    /* height: 10rem; */
    /* padding:0.5rem; */
    /* background-color: #e6e6e6; */
    .price{
        /* background-color: pink; */
        height:2rem;
        padding:0.5rem;
        display: flex;
        align-items: baseline;
        color: #fe2d55;
        /* background: #fff; */
        span{
            font-weight:700;
        }
        .p1{
            font-size:24px;
            
            font-weight:700;
            font-style: italic;
        }
        .p2{
            margin-left: 0.2rem;
            font-size:14px;
            text-decoration: line-through;
        }
    }
    .name{
        padding:0.5rem;
        h1{
            /* background-color: pink; */
            height: 1.6rem;
            text-align: left;
            color: #020202;
            font-size:24px;
            font-weight:700;
        }
        .list{
            margin-top: 0.5rem;
            display: flex;
            .title{
                width:25%;
                border-right: 0.1rem solid #fcfcfc;
                .p1{
                    font-size:17px;
                    color: #000000;
                }
                .p2{
                    font-size:14px;
                    color: #9b9b9b;
                }
                .br{
                    border-right: none;
                }
            }
        }
    }
    /* .border{
        padding:1rem 0;
        background-color: #e6e6e6;
    } */
    .hr{
        background-color: #e6e6e6;
        /* padding:0 -0.5rem; */
        height:0.5rem;
    }
    .course{
        display: flex;
        padding:0.5rem;
        p{
            margin-left: 0.5rem;
        }
        span{
            color: #b2b2b2;
            /* padding-left: 0.2rem; */
        }
    }
`