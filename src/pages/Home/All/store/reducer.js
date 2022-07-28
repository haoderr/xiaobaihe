import * as actionTypes from './constants'

const defaultState = {
    gamelist: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAMELIST: 
            return {
                ...state,
                gamelist: action.data
            }
        case actionTypes.CHANGE_ENTER_LOADING2:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state;
    }
}