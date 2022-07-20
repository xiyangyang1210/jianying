import styled from "styled-components";

export const Wrapper=styled.div`
    text-align: left;
    color: #000;
    font-size:18px;
    i{
        margin-right: 0.3rem;
    }
    .box{
        padding-left: 12px;
        /* display: flex; */
    }
    .course{
        height: 5.5rem;
        display: flex;
        overflow: auto;
        margin: 12px;
        margin-top: 0;
        .course-flex{
            width:28rem;
            /* height:7rem; */
            padding: 0 0.2rem;
            .course-Img{
                img{
                    width: 6rem;
                    border-radius: 0.3rem;
                /* max-height: 100%; */
                /* max-width: 100%; */
            }
            }
        .course_header{
            font-size:16px;
        }   
        }
    }
`