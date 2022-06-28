import styled from 'styled-components'

export const Header=styled.div`
    .inphead{
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        /* margin: 20px 0; */
        color: #959595;
    }
    .sousuo{
        position:absolute;
        top:1.6rem;
        left: 2rem;
        /* top:32px; */
        /* left: 40px; */
    }
    .inp{
        /* height: 2rem; */
        /* width: 11.25rem; */
        /* height: 40px;
        width: 60%; */
        text-align: left;
        /* border-radius: 1rem; */
        /* margin-left: 1rem; */
        /* padding: 0 2rem; */
        /* border-radius: 20px;
        margin-left: 20px;
        padding: 0 40px; */
        font-size:16px;
        /* background-color: #f3f3f3; */
        /* border: none; */
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