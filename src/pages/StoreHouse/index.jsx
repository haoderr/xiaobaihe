import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import { Wrapper } from './style'
import Banners from '../../components/Banners'
import ButtonOne from '../../components/ButtonOne'
import ButtonTwo from '../../components/ButtonTwo'
import GameRecommendList from '../../components/GameRecommendList'
import { EnterLoading } from '../../components/HotSearch/style'
import Loading  from '../../components/loading-v2/index'


function StoreHouse(props) {
    const { gameRecommendList, enterLoading } = props
    const { getGameRecommendListDispatch } = props
    const navigate = useNavigate()
    useEffect(() => {
        getGameRecommendListDispatch()
    }, [])
    // console.log(gameRecommendList);
    // let List = Array.from(gameRecommendList)
    // console.log(List);
  return (
    <Wrapper>
        <div className="header">
            <h2>推荐</h2>
            <span
                className="iconfont icon-sousuo"
                onClick={() => navigate("/search")}
            ></span>
        </div>
        <Banners />
        <ButtonOne />
        <ButtonTwo />
        <div className="tab">
            <span className="left">为您推荐</span>
            <span className="right">更多&gt; </span>
        </div>
        <GameRecommendList gameRecommendList={gameRecommendList} />
        { enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
    </Wrapper>
  )
}

const mapStateToProps= (state) => {
    return {
        gameRecommendList: state.storehouse.gameRecommendList,
        enterLoading: state.storehouse.enterLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameRecommendListDispatch() {
            dispatch(actionCreators.getGameRecommendList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StoreHouse)