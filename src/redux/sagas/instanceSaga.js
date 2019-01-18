import {  put as disptach ,takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';
function* sendInstance(action) {
    try {
       yield call(axios.post , '/api/instance' , {game_id: action.payload})
        yield disptach({type: 'GET_INSTANCE'})
    } catch (error) {
        console.log('error in instance post', error);

    }
}
function* getInstance(){
    try{
      const getInstanceResponse =  yield call(axios.get , '/api/instance' )
        yield disptach({type: 'SET_INSTANCE' , payload: getInstanceResponse.data })
    }catch(error){
        console.log('error in get instance ' , error);
        
    }
}

function* instanceSaga() {
    yield takeEvery('SEND_INSTANCE', sendInstance );
    yield takeEvery('GET_INSTANCE' , getInstance);
  }
  export default instanceSaga;