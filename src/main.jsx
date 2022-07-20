import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/styles/reset.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.min.css'
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
// 表达：从 react-redux 中解构出 Provider 组件，声明式 引入 数据管理功能 
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
