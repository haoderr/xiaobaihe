import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import Banners from '../../../components/Banners'
import Gamelist from '../../../components/Gamelist'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
// import Cutover from "../../../components/Cutover";
import { EnterLoading } from '../../../components/HotSearch/style'
import Loading  from '../../../components/loading-v2/index'

function All(props) {
    const { gamelist, enterLoading } = props
    const { getGamelistDispatch } = props
    useEffect(() => {
        getGamelistDispatch()
    }, [])
  return (
    <div>
        {/* <Cutover /> */}
        <Banners />
        <Gamelist gamelist={gamelist} />
        { enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        gamelist: state.all.gamelist,
        enterLoading: state.all.enterLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGamelistDispatch() {
            dispatch(actionCreators.getGameList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(All)

