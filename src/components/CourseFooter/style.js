import styled from "styled-components";

export const Wrapper=styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width:100%;
    height: 2.5rem;
    background-color: #fff;
    display: flex;
    /* line-height:2rem; */
    padding:0 0.5rem;
    justify-content: center;
    align-items: center;
    .collected{
        color: red;
    }
    .star{
        width: 3.5rem;
        .icon-stars{
            font-size: 24px;
        }
        span{
            display: block;
        }
    }
    .shopping{
        flex: 1;
        font-size:18px;
        .btn{
            width:100%;
            background-color: rgb(255,215,000);
        }
    }
`