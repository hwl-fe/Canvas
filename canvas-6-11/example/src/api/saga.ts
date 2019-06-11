import { STORE_ADD, STORE_ADD_ASYNC, STORE_RM, STORE_UPDATE } from '../constants/store';
import { call, put, takeEvery } from 'redux-saga/effects';     // 引入相关函数

function* goAge(action) {    // 参数是action创建函数返回的action
  console.log(action)
  const p = function () {
    return fetch(`http://image.baidu.com/channel/listjson?rn=${action.payload}...`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res
      })
  }
  const res = yield call(p)    // 执行p函数，返回值赋值给res

  yield put({      // dispatch一个action到reducer， payload是请求返回的数据
    type: STORE_ADD,
    payload: res
  })
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
  yield takeEvery(STORE_ADD, goAge)   // 如果有对应type的action触发，就执行goAge()函数
}

export default rootSaga; 