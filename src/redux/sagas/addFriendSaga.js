import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';

function* addFriend(action){
    try{ 
        yield call(axios.post , '/api/friend', action.payload)
        yield dispatch({type: 'GET_FRIENDS'})
    }catch(error){
        console.log('error in post ' ,  error);
        
    }
}


function* friendSaga() {
    yield takeEvery('ADD_FRIEND', addFriend );
  }
  export default friendSaga;