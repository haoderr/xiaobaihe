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
                const action =changeGameList(data.data);
                dispatch(action)
            })
    }
} 