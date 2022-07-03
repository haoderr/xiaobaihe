import React from 'react'
import propType from 'prop-types'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

export default function Gamelist({gamelist}) {
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
                                <p className="list__right-pic">
                                    <img src={item.img} alt="" />
                                </p>
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
Gamelist.propType = {
    gamelist: propType.array.isRequired
}