import styled from "styled-components";

export const Wrapper=styled.div`
    h1{
        text-align: left;
        font-size: 20px;
        color: #000;
    }
      /* flex-wrap: wrap; */
      margin:0.5rem;
    .course-flex{
        /* width: 8.8125rem; */
        /* width: 47%; */
        /* display: flex;
        flex-direction: column; */
        /* margin-right: 0.25rem; */
        /* margin-right: 5px; */
    }
    .course-List{
    }
    .course-Box{
        display: flex;
        margin:0.5rem 0;
        /* background-color: pink; */
        .course-Img{
            width:40%;
            /* flex: 1; */
            img{
                max-height: 100%;
                max-width: 100%;
            }
        }
        .course-Content{
            width:60%;
            /* flex: 1; */
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
            /* align-items:flex-end; */
            justify-content: space-between;
            .course_header{
                /* height:20%; */
                margin:0.4rem 0;
                /* margin:8px 0; */
                font-size: 17px;
                font-weight:700;
                text-align: left;
                /* height:2rem; */
                color: #000;
            }
            .course_name{
                /* height:20%; */
                font-size:12px;
                color: #737373;
                text-align: left;
                p{
                    display: inline;
                    margin: 0 0.2rem;
                    /* margin: 0 4px; */
                }
            }
            .course_footer{
                display: flex;
                align-content: space-between;
                .btn{
                    /* flex: 1; */
                    height: 1.5rem;
                    font-size:16px;
                    width:4rem;
                    background-color: #ff2753;
                    border: none;
                    color: #fff;
                }
                .course_price{
                flex: 1;
                /* width:80%; */
                height: 100%;
                text-align: left;
                /* font-size: */
                /* align-self: end; */
                /* align-items: end; */
                align-content: flex-end;
                p{
                    display: inline;
                    
                }
                .course_price_now{
                    font-size:17px;
                    color:#bf395a;
                }
                .course_price_old{
                    padding:0 0.25rem;
                    /* padding:0 5px; */
                    text-decoration: line-through;
                }
                }
            }
        }
    }
    
`