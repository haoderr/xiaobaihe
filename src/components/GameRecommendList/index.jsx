import React from 'react'
import { Wrapper } from './style'
import logo from './logo.png'
import LazyLoad from 'react-lazyload'
import Loading from './loading.jpg'

export default function Gamelist(props) {
    const { gameRecommendList } = props
    // console.log(gameRecommendList);
  return (
      <Wrapper>
        {
            gameRecommendList.map(
                item => (
                    <div className="list" key={item.id}>
                        <div className="img">
                        <LazyLoad 
                            placeholder={<img width="100%" 
                            height="100%" src={Loading}/>}>
                                <img 
                                width="100%" 
                                height="100%"
                                src={item.pic + "?param=300x300"} alt="" />
                        </LazyLoad>
                        </div>
                        <div className="text">
                            <div className="name">{item.name}</div>
                            <div className="price">
                                <img src={logo} alt="" />
                                <div className="now_price">{item.now_price}</div>
                                <div className="before_price">{item.before_price}</div>
                            </div>
                            <div className="label">{item.label}</div>
                        </div>
                        
                    </div>
                )
            )
        }
      </Wrapper>
  )
}