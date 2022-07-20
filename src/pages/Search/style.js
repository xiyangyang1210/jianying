import styled from 'styled-components'
import style from '@/assets/global-style'

export const Container = styled.div`
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: ${props => props.play > 0 ? '3rem' : 0};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    /* transform-origin 更改一个元素变形的原点 */
    transform-origin: right bottom;
    /* CSSTransition 过度类型给children */
    &.fly-enter,&.fly-appear{
        opacity: 0;
        /* 3d写z轴 启动 GPU 加速 */
        transform: translate3d(100%,0,0);
    }
    /* active 正在进行时 */
    &.fly-enter-active,&.fly-appear-active{
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0,0,0);
    }
    &.fly-exit{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    &.fly-exit-active{
        opacity: 0;
        transform: all .3s;
        transform: translate3d(100%,0,0);
    }
`

export const ShortcutWrapper = styled.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
    .search{
        margin-top: 1rem;
    }
`

// 为了更好的复用
// 样式组件可提供 可复用样式
export const HotKey = styled.div`
    margin: 0 0.5rem 0.5rem 0.5rem;
    .title{
        padding-top: 1.75rem;
        /* font-size: ${style['font-size-l']}; */
        font-size:18px;
        text-align: left;
        /* color: ${style['font-color-desc-v2']}; */
        &::after{
            content: "";
            background-color: ${style['font-color-span-active']};
            /* background-color: #ec2e5a; */
            width:1rem;
            height: 0.1rem;
            position: absolute;
            top: 3rem;
            /* bottom: 0; */
            left: 0.8rem;
            /* right: 0; */
            margin-left: auto;
            margin-right: auto;
        }
    }
    ul{
        margin-top: 1rem;
    }
    .item{
        display: inline-block;
        width:50%;
        /* padding: auto; */
        padding: 0.25rem 0.5rem  0.25rem 0;
        /* margin: 0rem 1rem 0.5rem 0; */
        text-align: left;
        /* border-radius: 0.3rem; */
        /* background: ${style["highlight-background-color"]}; */
        font-size: 16px;
        /* color: ${style['font-color-desc']}; */
    }
`