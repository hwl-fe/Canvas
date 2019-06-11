import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userinfo from './userinfo'
import store from './store'

export default combineReducers({
  routerReducer,
  userinfo,
  store
})