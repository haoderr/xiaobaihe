import * as actionTypes from './constants'

const defaultState = {
    hotSearchList: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOTSEARCH_LIST: 
            return {
                ...state,
                hotSearchList: action.data
            }
        case actionTypes.CHANGE_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state;
    }
}