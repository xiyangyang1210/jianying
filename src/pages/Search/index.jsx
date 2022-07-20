import React, { useState, useEffect, useRef, useCallback } from 'react'
import { connect } from 'react-redux';
// useRef DOM相关
// useCallback 性能优化 缓存计算结果
import { getHotKeywords,getSearchResult } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import {
    Container,
    ShortcutWrapper,
    HotKey
} from './style'
import SearchBox from '../../components/common/search-box'
import Loading from '@/components/common/loading'
import Scroll from '@/components/common/Scroll'
import Lazyload, { forceCheck } from 'react-lazyload';

const Search = (props) => {
    const navigate = useNavigate();
    const {
        hotList,
        searchResult
    } = props;
    const {
        getHotKeywordsDispatch,
        getSearchResultDispatch,
    } = props;
    // 搜索内容 非共享数据，不用 redux 解决共享状态问题
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    // 搜索列表 api action redux
    const searchBack = useCallback(() => {
        setShow(false)
    }, [])
    useEffect(() => {
        if(query.trim()){
            getSearchResultDispatch(query)  
        }
    }, [query])
    const handleQuery = (q) => {
        // console.log(q)
        // 给子组件防抖后得到的数据修改方法
        setQuery(q)
    }
    useEffect(() => {
        setShow(true)
        if (!hotList.length) {
            getHotKeywordsDispatch();
        }
    }, [])
    // setState() 也是异步的，更新被改变的state
    const renderHotKey = () => {
        let list = hotList ? hotList : [];
        return (
            <ul>
                {!list.length&&<div>loading</div>}
                {
                    list.map(item => {
                        return (
                            <li
                                className="item"
                                key={item.id}
                                onClick={() => navigate(`/coursedetail/${item.id}`)}
                            >
                                <span>{item.key}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    const renderSearchList=()=>{
        return searchResult.map(item=>{
            // console.log(item,'1234')
            return(
                <li
                    className="item"
                    key={item.id}
                    onClick={() => navigate(`/coursedetail/${item.id}`)}
                >
                    <span>{item.key}</span>
                </li>
            )
        })
    }
    const renderNull = () => {
        return (
            <p style={{'textAlign':'center'}}>无相关课程，请重新搜索</p>
        )
    }
    return (
        // 当组件挂载上去后，应用css transition效果
        // 小 bug ，退出搜索页时，退出效果做出来了没有显示时间？？？
        <CSSTransition
            in={show}
            timeout={300}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => {
                navigate(-1)
            }}
        >
            <Container >
                <div className="search_box_wrapper">
                    <SearchBox
                        back={searchBack}
                        newQuery={query}
                        handleQuery={handleQuery}
                    >
                    </SearchBox>
                </div>
                <ShortcutWrapper show={!query}>
                    {/* props 传值给 styled-components 做样式业务 */}
                    <Scroll>
                        <div>
                            <HotKey>
                                <h1 className='title'>热搜</h1>
                                {renderHotKey()}
                            </HotKey>
                        </div>
                    </Scroll>
                </ShortcutWrapper>
                <ShortcutWrapper show={query}>
                    <Scroll onScroll={forceCheck}>
                        <div className='search'>
                        { searchResult == false ? renderNull() : renderSearchList() }
                        </div>
                    </Scroll>
                </ShortcutWrapper>
            </Container>
        </CSSTransition>
    )
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        hotList: state.Search.hotList,
        searchResult: state.Search.searchresult,
    }
}
// container Part
const mapDispatchToProps = (dispatch) => {
    return {
        getHotKeywordsDispatch() {
            dispatch(getHotKeywords());
        },
        getSearchResultDispatch(query) {
            dispatch(getSearchResult(query))
        },
    }
}
// export default Search
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))
