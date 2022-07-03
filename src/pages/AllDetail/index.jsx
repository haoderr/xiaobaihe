import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getGamelist } from '../../api/request'
import classnames from 'classnames'

export default function AllDetail() {
    const navigate = useNavigate()
    const [detail, setDetail] = useState([])
    const [detaill, setDetaill] = useState([])
    const [hit1, setHit1] = useState([])
    const [show, isshow] = useState(false);
    const changeHit1 = (hit1) => {
        setHit1(hit1)
    }
    const [hit2, setHit2] = useState([])
    const changeHit2 = (hit2) => {
        setHit2(hit2)
    }
     const [hit3, setHit3] = useState([])
    const changeHit3 = (hit3) => {
        setHit3(hit3)
    }
    const [search] = useSearchParams()
    const detaild = search.get('id')||''
    // console.log(detaild);
    useEffect(() => {
        (async () => {
            let { data: gameData } = await getGamelist()
            setDetail(gameData)
        })()
    },[])
    useEffect (() => {
        let detaildata = detail.filter((item) => 
            detaild == item.id   
        )
        setDetaill(detaildata)
    },[detail])
    return (
        <Wrapper>
            <NavBar
                back='返回'
                onBack={() => navigate(-1)}
            >
                正文
            </NavBar>
            {
                detaill.map(
                    item => (
                        <div className="detail" key={item.id}>
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="title">{item.title}</div>
                            <div className="author">
                                <div className="author_pic">
                                    <img src={item.author_pic} alt="" />
                                </div>
                                <div className='author_nm'>{item.author_nm}</div>
                                <div hidden={show}>
                                <button className='attention'  onClick={() => isshow(!show)}>+关注</button>
                                </div>
                            </div>
                            <div className="text">{item.text}</div>
                        </div>
                    )
                )
            }
            <div className="comment">
                <div className="comment-left">
                    <input type="text" placeholder='评论' />
                </div>
                <div className="comment-right">
                    <div className={classnames('icon_' ,{active: hit1 == 'bright1'})} onClick={changeHit1.bind(null, 'bright1')}>
                        <i className='fa fa-star'></i>
                        <span>收藏</span>
                    </div>
                    <div className={classnames('icon_' ,{active: hit2 == 'bright2'})} onClick={changeHit2.bind(null, 'bright2')}>
                        <i className='fa fa-battery-3'></i>
                        <span>充电</span>
                    </div>
                    <div className={classnames('icon_' ,{active: hit3 == 'bright3'})} onClick={changeHit3.bind(null, 'bright3')}>
                        <i className='fa fa-thumbs-up'></i>
                        <span>点赞</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}