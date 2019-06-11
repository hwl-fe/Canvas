import { STORE_ADD, STORE_RM } from '../constants/store'
export interface Add {
  type: STORE_ADD;
  data?: any;
}

export interface AddFinish {
  type: STORE_ADD;
  data?: any;
}

export interface Remove {
  type: STORE_RM;
  data?: any;
}

export type Opreate = Add | Remove | AddFinish


export function add(item?: any): Add {
  return {
    type: STORE_ADD,
    data: item
  }
}

export function rm(): Remove {
  return {
    type: STORE_RM,
  }
}

