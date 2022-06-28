import styled from "styled-components";

export const Wrapper=styled.div`
    .navbar{
    height: 1.75rem;
    /* height: 35px; */
    background:#fff;
    /* border-bottom: 1px solid #ccc; */
    .nav-box{
        height: 1.75rem!important;
        line-height: 1.75rem!important;
        /* height: 35px!important;
        line-height: 35px!important; */
    }
    .nav-item{
        width:auto!important;
        position: relative;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        justify-content: center;
        font-size: 14px;
        color: #656565;
        /* border-bottom: 1px solid #ebebeb; */
        &.active{
            font-size:16px;
            font-weight:700;
            color: #454545;
        }
        &.active::after
        {
            content: "";
            background-color: #ec2e5a;
            width:1rem;
            height: 0.08rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
    }
}
`