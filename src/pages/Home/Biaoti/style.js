import styled from 'styled-components'

export const Wrapper=styled.div`
    width: 18.75rem;
    /* width: 100%; */
    /* height: 50px; */
    display: flex;
    a{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.active{
            color: #f23053;
        }
    }
`