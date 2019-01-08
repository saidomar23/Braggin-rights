import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';
function* searchGames(action) {
    try {
        const apiResponse = yield call(axios.get, `/api/search/${action.payload}`)
        yield dispatch({ type: 'SET_GAMES', payload: apiResponse.data.results })
    } catch (error) {
        console.log('error getting giant bomb games', error);

    }
}

function* gameSearchSaga() {
    yield takeEvery('FETCH_GAMES', searchGames );
  }
  export default gameSearchSaga;