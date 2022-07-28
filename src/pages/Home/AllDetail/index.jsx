import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import classnames from 'classnames'


function AllDetail (props)  {
    const { gamelist } = props
    const { getGamelistDispatch } = props
    const navigate = useNavigate()
    //匹配上一级的ID
    const [search] = useSearchParams()
    const matchID = search.get('id')||''
    const [ detail, setDetail ] = useState('')
    useEffect(() => {
        getGamelistDispatch()
    }, [])
    useEffect (() => {
        let detaildata = gamelist.filter((item) => 
            matchID == item.id   
        )
        setDetail(detaildata)
    },[gamelist])
    // 点赞 充电 收藏
    let data = Array.from(detail)
    const [hit1, setHit1] = useState([])
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
    // 关注
    const [show, isshow] = useState(false);
    return (
        <Wrapper>
            <NavBar
                back='返回'
                onBack={() => navigate(-1)}
            >
                正文
            </NavBar>
            {
                data.map(
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

const mapStateToProps = (state) => {
    return {
        gamelist: state.all.gamelist,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGamelistDispatch() {
            dispatch(actionCreators.getGameList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllDetail)