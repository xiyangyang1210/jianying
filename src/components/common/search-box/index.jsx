import React, { memo ,useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import style from '@/assets/global-style';
import {debounce} from '@/api/utils';

const SearchBoxWrapper=styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0 0.3rem;
    padding-right: 1rem;
    height:2rem;
    /* background: ${style["theme-color"]}; */
    .s1{
        padding-left: 0.4rem;
        width: 1.4rem;
        line-height: 1.4rem;
        border-end-start-radius: 0.7rem;
        border-top-left-radius: 0.7rem;
        background-color: #fff ;
        .sousuo{
        /* position: absolute; */
        /* left: 1rem; */
        /* top: 0.55rem; */
        }
    }
    .icon-back{
        font-size: 1.2rem;
        color:${style["font-color-light"]};
    }
    .box{
        flex: 1;
        margin: 0 0.25rem 0 0;
        /* padding-left: 0.4rem; */
        line-height: 1.4rem;
        /* background: ${style["theme-color"]}; */
        /* color:${style["highlight-background-color"]}; */
        font-size:${style["font-size-m"]};
        outline: none;
        border: none;
        border-radius: 0.7rem;
        border-top-left-radius: 0;
        border-end-start-radius: 0;
        /* border-bottom: 1px solid ${style["border-color"]}; */
        &::placeholder{
            /* color: ${style["font-color-light"]}; */
        }
    }
    .icon-delete{
        font-size: 16px;
        color: ${style["background-color"]};
    }
    .s2{
        margin: 0 0 0 0.4rem;
    }
`

const SearchBox=(props)=>{
    const queryRef=useRef();
    // console.log(queryRef,'///')
    // 解构父组件props时，分两部分
    // 读props
    // 方法
    const {newQuery}=props;
    const {handleQuery,back}=props;
    const [query,setQuery]=useState('')
    // 父组件传过来的函数封装一下
    // 优化再升级
    // useMemo 可以缓存 上一次函数计算的结果
    let handleQueryDebounce=useMemo(()=>{
        return debounce(handleQuery,500)
    },[handleQuery])

    // mount 
    useEffect(()=>{
        // console.log(queryRef)
        // 挂载后
        queryRef.current.focus();
    },[])
    // 使用useEffect 去更新
    useEffect(()=>{
        // query 更新
        // console.log(queryRef)
        // let curQuery=query
        handleQueryDebounce(query)
    },[query])

    useEffect(()=>{
        // mount 时候 执行 父组件 newQuery -> input query 
        let curQuery=query;
        if(newQuery!==query){
            curQuery=newQuery;
            queryRef.current.value=newQuery;
        }
        setQuery(curQuery)
        // newQuery 更新时执行
    },[newQuery])

    const clearQuery=()=>{
        setQuery('');
        queryRef.current.value = '';
        queryRef.current.focus();
    }
    const handleChange=(e)=>{
        let val=e.currentTarget.value
        setQuery(val)
    }
    const displayStyle=query?{display:'block'}:{display:'none'};

    return(
        <SearchBoxWrapper>
            <span className="s1">
                <i className="iconfont icon-sousuo sousuo">&#xe655;</i>
            </span>
            <input type="text" className="box" 
            placeholder="好友组团卡点照" 
            ref={queryRef}
            onChange={handleChange}
            />
            <span className="s2" onClick={()=>back()}>取消</span>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox);
