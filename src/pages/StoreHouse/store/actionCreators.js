import { getGameRecommendListRequest } from '../../../api/request'
import * as actionTypes from './constants'

export const changeGameRecommendList = (data) => ({
    type: actionTypes.CHANGE_GAMERECOMMENDLIST,
    data: data
})

export const getGameRecommendList = () => {
    return (dispatch) => {
        getGameRecommendListRequest()
            .then(data => {
                dispatch(changeGameRecommendList(data.data)),
                dispatch(changeEnterLoading1(false))
            })
    }
} 

export const changeEnterLoading1 = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING1,
    data
})
