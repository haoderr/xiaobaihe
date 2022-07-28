import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'
import LazyLoad from 'react-lazyload'
import Loading from './loading.jpg'

export default function Gamelist(props) {
    const { gamelist } = props
  return (
    <div>
      <Wrapper>
        {
            gamelist.map(
                item => (
                    <Link 
                        className='gamelist'
                        to={{
                            pathname:`/alldetali/${item.id}`,
                            search:`id=${item.id}`
                        }}
                        key={item.id}
                    >
                        <div className="list">
                            <div className="list__left">
                                <div className="list__left-title">{item.title}</div>
                                <div className="list__left-button">{item.time} · {item.type} <i className='fa fa-envelope-o'></i></div>
                                
                            </div>
                            <div className="list__right">
                                {/* <p className="list__right-pic"> */}
                                <LazyLoad 
                                    placeholder={<img width="100%" 
                                    height="100%" src={Loading}/>}>
                                        <img 
                                        width="100%" 
                                        height="100%"
                                        src={item.img + "?param=300x300"} alt="" />
                                </LazyLoad>
                                    {/* <img src={item.img} alt="" /> */}
                                {/* </p> */}
                            </div>
                        </div>
                    </Link>
                )
            )
        }
      </Wrapper>
    </div>
  )
}