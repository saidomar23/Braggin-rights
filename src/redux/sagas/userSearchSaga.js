import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';
function* searchUser(action) {
    try {
        const getResponse = yield call(axios.get, `/api/usersearch/${action.payload}`)
        yield dispatch({ type: 'SET_SEARCH', payload: getResponse.data })
    } catch (error) {
        console.log('error in get saga', error);

    }
}

function* userSearchSaga() {
    yield takeEvery('SEARCH_USERS', searchUser );
  }
  export default userSearchSaga;