import styled from "styled-components";

export const Wrapper=styled.div`
    /* height: 10rem; */
    /* background-color: black; */
    .teacher{
        margin:0.5rem;
        /* display: flex; */
        h1{
            text-align: left;
            font-size:20px;
            margin:0.5rem 0;
            color: #0a0a0a;
            font-weight:700;
        }
        .tea{
            width:100%;
            display: flex;
            align-items: center;
            .people{
                display: flex;
                flex: 1;
                .name{
                    /* justify-content: center; */
                    display: flex;
                    margin:0 0.5rem;
                    flex-direction: column;
                    justify-content: center;
  	                align-items: left;
                    text-align: left;
                    .p1{
                        font-size:16px;
                        color: #414141;
                        /* font-weight:700; */
                    }
                    .p2{
                        font-size:14px;
                        color: #999999;
                    }
                }
                .circle{
                /* pad:0.5rem 0; */
                display: block; 
                border-radius: 50%; 
                height: 2.5rem; 
                width: 2.5rem;
                background-color: pink; 
                margin: 0; 
                    img{
                        margin:auto;
                        max-height: 100%;
                        max-width: 100%;
                        background-size: cover;
                        border-radius:50%;
                    }
                }
            }
            .btn{
                width: 3rem;
                height: 1.2rem;
                border: 1px solid #f7efed;
                background-color: #f7efed;
                line-height:1.2rem;
                color: #f6315c;
            }
        }
    }
`