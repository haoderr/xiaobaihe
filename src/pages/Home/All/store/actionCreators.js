import { getGamelistRequest } from '../../../../api/request'
import * as actionTypes from './constants'

export const changeGameList = (data) => ({
    type: actionTypes.CHANGE_GAMELIST,
    data: data
})

export const getGameList = () => {
    return (dispatch) => {
        getGamelistRequest()
            .then(data => {
                dispatch(changeGameList(data.data));
                dispatch(changeEnterLoading(false))
            })
    }
} 

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING2,
    data
})
