import { combineReducers } from "redux";

import { reducer as allreducer } from '../pages/Home/All/store/index'
import { reducer as storehousereducer } from '../pages/StoreHouse/store/index'
import { reducer as searchreducer } from '../pages/Search/store/index'


export default combineReducers ({
    all: allreducer,
    storehouse:storehousereducer,
    search: searchreducer
})