import * as actionTypes from '../constants/userinfo'

interface Update {
  type: actionTypes.USERINFO_UPDATE,
  data?: any;
}

export type Opreat = Update;

export function update(data?: any) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data: data
  }
}