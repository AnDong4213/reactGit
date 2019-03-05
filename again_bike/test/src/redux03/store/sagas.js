import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST} from './actionTypes'
import { initListAction }from './actionCreators' 
import axios from 'axios'

function* getInitList() {
  try {
    let {status, data: {data}} = yield axios.get('/list.json');
    if (status === 200) {
      let action = initListAction(data);
      yield put(action)
    }
  } catch (err) {
    console.log('网络请求失败...')
  }
}

function* mySaga() {
  // yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;


