import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/styles/reset.css'
import 'swiper/dist/css/swiper.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import '../js/adapter'
import './assets/font/iconfont.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
