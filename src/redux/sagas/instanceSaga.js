import { takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';
function* sendInstance(action) {
    try {
       yield call(axios.post , '/api/instance' , {game_id: action.payload})
    } catch (error) {
        console.log('error in instance post', error);

    }
}

function* instanceSaga() {
    yield takeEvery('SEND_INSTANCE', sendInstance );
  }
  export default instanceSaga;