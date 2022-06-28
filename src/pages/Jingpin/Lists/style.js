import styled from "styled-components";

export const Wrapper=styled.div`
    .content{
        width: 18.75;
        height: 2.5rem;
        /* width: 100%;
        height: 50px; */
        display: flex;
    }
    a{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        /* &.active{
            color: #f23053;
        } */
        i{
            font-size: 2.2em;
        }
    }
    .hr{
        background-color: #f6f6f6;
        width:18.8125rem;
        height:0.05rem;
        margin: 0.5rem;
        /* width:95%;
        height:1px;
        margin: 10px; */
        /* color: #ccc; */
    }
`