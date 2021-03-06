import React from 'react'
import { Tags } from './style'
import classnames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import { isPathPartlyExisted } from '../../utils'

export default function Cutover() {
    const  { pathname } = useLocation()
    if (isPathPartlyExisted(pathname)) return
    let recommendNavs = [
        {id: 1, desc: '全部', path: '/all'},
        {id: 2, desc: '盒友杂谈', path: '/talk'},
    ]
    return (
        
        <Tags>
            <div className='top'>推荐</div>
            <div className="navbar">
                <div className="nav-box">
                    {
                        recommendNavs.map((item, index) => {
                            return (
                                <NavLink
                                    index={index}
                                    to={`${item.path}`}   
                                    key={item.id}
                                    className={classnames('nav-item' ,{jihuo:pathname == item.path })}
                                >
                                    {item.desc}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </Tags>
    )
}
