import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';


function* getFriend(action){
try{
    const getFriendResponse = yield call(axios.get , `/api/friend/${action.payload}`)
     yield dispatch({type: 'SET_FRIEND' , payload: getFriendResponse.data})
 }catch(error){
     console.log('error in get friends' , error);
     
 }
}


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
    yield takeEvery('GET_FRIENDS' , getFriend)
  }
  export default friendSaga;