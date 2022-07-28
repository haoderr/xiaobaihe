import * as actionTypes from './constants'

const defaultState = {
    gameRecommendList: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAMERECOMMENDLIST: 
            return {
                ...state,
                gameRecommendList: action.data
            }
        case actionTypes.CHANGE_ENTER_LOADING1:
        return {
            ...state,
            enterLoading: action.data
        }
        default:
            return state;
    }
}