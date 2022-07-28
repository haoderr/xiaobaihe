import * as actionTypes from './constants'

const defaultState = {
    gamelist: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAMELIST: 
            return {
                ...state,
                gamelist: action.data
            }
        default:
            return state;
    }
}