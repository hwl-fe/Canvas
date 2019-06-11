import * as actionStore from '../constants/store'

interface actionType {
  type: string;
  data: any
}

const initialState: any[] = [1, 2, 3, 4, 5, 6, 7, 8]

export default function store(state = initialState, action: actionType) {
  switch (action.type) {
    case actionStore.STORE_ADD:
      state.push(action.data)
      return state
    case actionStore.STORE_RM:
      state.splice(state.length - 1, 1)
      return state;
    default:
      return state
  }
}