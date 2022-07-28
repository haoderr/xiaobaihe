import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {FooterWrapper} from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'

export default function Footer(props) {
  const  { pathname } = useLocation()
  if (isPathPartlyExisted(pathname)) return
  // 公共函数的 在一个数组里匹配每一项部分匹配pathname 就可以了
  // if(pathname.indexOf('')) 
  // if (['./cities', '/homedetail'].indexOf(pathname) != -1) return
  return (
    <FooterWrapper>
      <Link to='/home/all' className={classnames({active:pathname == '/home/all' || pathname == '/'})}>
        <i className='iconfont icon-triangle'></i>
        <span>首页</span>
      </Link>
      <Link to='/community' className={classnames({active:pathname == '/community'})}>
        <i className='iconfont icon-yuan'></i>
        <span>社区</span>
      </Link>
      <Link to='/storehouse' className={classnames({active:pathname == '/storehouse'})}>
        <i className='iconfont icon-cuocha_kuai'></i>
        <span>游戏库</span>
      </Link>
      <Link to='/mine'className={classnames({active:pathname == '/mine'})}>
        <i className='iconfont icon-tx-zhengfangxing'></i>
        <span>我</span>
      </Link>
    </FooterWrapper>
  )
}
