import styled from "styled-components";

export const Wrapper=styled.div`
    .headers{
        /* height: 1.5rem; */
        /* background-color: pink; */
        /* line-height:1.5rem; */
        margin-top:0.8rem;
        h1{
            text-align: center;
            font-size:20px;
        }
        .close{
            position:fixed;
            top:0.3rem;
            left: 0.5rem;
            font-size:30px;
            i{
                font-size:26px;
            }
        }
    }
    .pay{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .paymoney{
            display:flex;
            height:2rem;
            line-height:2rem;
            /* width:95%; */
            /* padding-left: -2.15rem; */
            /* background-color: pink; */
            font-size:22px;
            margin:0.4rem 0;
            span{
                font-size:40px;
            }
        }
        .word{
            color: #a2a2a2;
        }
    }
    .pay_way{
        display: flex;
        margin:0.5rem;
        label{
            
            flex:1;
            font-size:20px;
        
        }
        input{
            /* font-size:18px; */
            zoom:180%
        }
        i{
            font-size:28px;
            margin-right: 0.3rem;
        }
        .wx{
            color: green;
        }
        .zfb{
            color: blue;
        }
    }
    .btns{
        margin:0.5rem;
        .btn{
            margin:0.5rem;
            width:95%;
            position: fixed;
            bottom: 0;
            left:0;
            background-color: #fe3056;
            color: #fff;
    }
    }
`