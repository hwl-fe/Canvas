import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action:any) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data
    default:
      return state
  }
}