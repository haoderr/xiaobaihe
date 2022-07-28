import React from 'react'
import { ButtonOneWrapper } from './style'
import {Link, useLocation} from 'react-router-dom'


export default function ButtonOne() {
  return (
    <ButtonOneWrapper>
        <Link to='/storehouse/mall'>
            <i className='iconfont icon-shoutibao'></i>
            <span>黑盒商城</span>
        </Link>
        <Link to='/storehouse/trade'>
            <i className='iconfont icon-jiaoyiguanliicon'></i>
            <span>饰品交易</span>
        </Link>
        <Link to='/storehouse/play'>
            <i className='iconfont icon-youxi'></i>
            <span>玩一玩</span>
        </Link>
        <Link to='/storehouse/company'>
            <i className='iconfont icon-jianzhu'></i>
            <span>游戏厂商</span>
        </Link>
        <Link to='/storehouse/gameSheet'>
            <i className='iconfont icon-liebiao'></i>
            <span>游戏单</span>
        </Link>
    </ButtonOneWrapper>
  )
}
