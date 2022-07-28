import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { BannerWrapper } from './style';

export default function Banners() {
    useEffect(() => {
            new Swiper('.all_banners', {
            loop: true,
            autoplay: true,
            pagination: {
                el:'.swiper-pagination'
            }
        })
    },[])
  return (
    <BannerWrapper>
        <div className="all_banners seiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://cdn.max-c.com/heybox/game/header/1426210_kaoXI.jpg" alt="" />
                    </p>
                </div>
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://cdn.max-c.com/heybox/game/header/1174180_QlGB3.jpg" alt="" />
                    </p>
                </div>
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://cdn.max-c.com/heybox/game/header/814380_Wqt1y.jpg" alt="" />
                    </p>
                </div>
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://cdn.max-c.com/heybox/game/header/242760_In3ui.jpg" alt="" />
                    </p>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </BannerWrapper>
  )
}
