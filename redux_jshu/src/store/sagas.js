import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
    try {
        let res = yield axios.get('./list.json');
        let action = initListAction(res.data.data)
        yield put(action)
    } catch(e){
        console.log('网络请求失败')
    }
}
 
function* mySagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySagas;