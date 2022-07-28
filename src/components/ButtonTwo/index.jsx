import React from 'react'
import { ButtonTwoWrapper } from './style'
import {Link, useLocation} from 'react-router-dom'


export default function ButtonTwo() {
  return (
    <ButtonTwoWrapper>
        <Link to='/storehouse/lottery' className='tab'>
            <span>0元抽奖</span>
            <i className='iconfont icon-a-jiqiqixie04'></i>
        </Link>
        <Link to='/storehouse/add' className='tab'>
            <span>喜加一</span>
            <i className='iconfont icon-gift-full'></i> 
        </Link>
        <Link to='/storehouse/coupon' className='tab'>
            <span>领券中心</span>
            <i className='iconfont icon-lingquan'></i> 
        </Link>
        <Link to='/storehouse/active' className='tab'>
            <span>专题活动</span>
            <i className='iconfont icon-mbile-full'></i>
        </Link>
    </ButtonTwoWrapper>
  )
}
