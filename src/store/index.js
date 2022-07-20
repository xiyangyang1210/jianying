import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// 激活 redux devtool 插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// reducer 
const store = createStore(reducer, composeEnhancers(
    // enhancers 增进器
    applyMiddleware(thunk)
    // 不加这个applyMiddleware(thunk) 异步请求 中间件 redux-thunk
    // Error: Actions must be plain objects.
    // Use custom middleware for async actions.
));
export default store