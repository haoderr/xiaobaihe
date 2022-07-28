import { getHotSearchListRequest } from '../../../api/request'
import * as actionTypes from './constants'

export const changeHotSearchList = (data) => ({
    type: actionTypes.CHANGE_HOTSEARCH_LIST,
    data: data
})

export const getHotSearchList = () => {
    return (dispatch) => {
        getHotSearchListRequest()
            .then(data => {
                dispatch(changeHotSearchList(data.data));
                dispatch(changeEnterLoading(false))
            })
    }
} 


export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
})
