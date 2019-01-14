import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';
function* grabGame(action) {
    try {
        const apiResponse = yield call(axios.get, `/api/game/${action.payload}`)
        yield dispatch({ type: 'SET_GAME', payload: apiResponse.data.results })
    } catch (error) {
        console.log('error getting giant bomb games', error);

    }
}
function* addGame(action){
    try{
        yield call(axios.post , `/api/game` , action.payload)
        yield dispatch({type: 'SET_FAVORITE' })
    }catch(error){
        console.log('error in addgame saga' , error);
        
    }
}
function* gameSaga() {
    yield takeEvery('GRAB_GAME', grabGame );
    yield takeEvery('ADD_GAME' , addGame)
  }
  export default gameSaga;