import styled from "styled-components";

export const Wrapper=styled.div`
/* background-color: pink; */
height:20rem;
      width: 18.75rem;
      /* width: 100%; */
      display: flex;
      flex-wrap: wrap;
      /* margin:0.5rem auto; */
      margin:0.5rem;
      /* margin-bottom: 0.5rem; */
      /* margin:10px; */
    .course-flex{
        width: 8.8125rem;
        /* width: 47%; */
        display: flex;
        margin-right: 0.25rem;
        /* margin-right: 5px; */
    }
    .course-List{
    }
    .course-Box{
        height:7rem;
        position: relative;
        .course-Img{
            /* height:7rem; */
            img{
                max-height: 100%;
                max-width: 100%;
            }
        }
        .get-Course{
            position: absolute;
            height:1.2rem;
            bottom: 2.2rem;
            /* height:24px;
            bottom: 100px; */
            font-size:14px;
            line-height:1.2rem;
            right: 0.25rem;
            /* line-height:24px;
            right: 5px; */
            z-index: 10;
            padding:0 0.4rem;
            /* padding:0 8px; */
            border-radius: 0.15rem;
            /* border-radius: 3px; */
            background: rgba(20, 20, 20,.4);
            color: #fff;
        }
        .course-Content{
            .course_header{
                margin:0.4rem 0;
                /* margin:8px 0; */
                font-size: 17px;
                font-weight:700;
                text-align: left;
                height:2rem;
                color: #000;
            }
            .course_name{
                font-size:12px;
                color: #737373;
                text-align: left;
                p{
                    display: inline;
                    margin: 0 0.2rem;
                    /* margin: 0 4px; */
                }
            }
            .course_price{
                text-align: left;
                /* font-size: */
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
    
`