import styled from 'styled-components'

export const FooterWrapper=styled.div`
    position:fixed;
    bottom: 0;
    left:0;
    width: 100%;
    /* width: 18.75rem; */
    z-index: 1000;
    /* height: 50px; */
    height: 2.5rem;
    display: flex;
    background: #fff;
    a{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.active{
            color: #f23053;
        }
        i{
            font-size: 2.2em;
        }
    }
`