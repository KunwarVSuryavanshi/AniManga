import {createStore, combineReducers} from 'redux';
import GetAniApiReducer from '../Reducers/GetAniApi.reducer';

const rootReducer = combineReducers({
  GetAniApiReducer
}) 

const store = createStore(rootReducer)

export default store