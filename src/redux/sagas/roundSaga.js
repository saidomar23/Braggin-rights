import {  put as dispatch ,takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';


function* player1Round(action) {
    try {
        yield call(axios.post, `/api/round/player1` ,action.payload )
    } catch (error) {
        console.log('error in round saga', error);

    }
}
function* player2Round(action) {
    try {
        yield call(axios.post, `/api/round/player2` ,action.payload )
    } catch (error) {
        console.log('error in round saga', error);

    }
}

function* getResults(action){
    try{
        const getResponse = yield call(axios.get , `/api/round/${action.payload}`)
        yield dispatch({type: 'SET_RESULTS' , payload: getResponse.data})
    }catch(error){
        console.log('error in get results ' , error);
        
    }
}

function* roundSaga() {
    yield takeEvery('ADD_PLAYER1', player1Round )
    yield takeEvery('ADD_PLAYER2', player2Round )
    yield takeEvery('GET_RESULTS' , getResults)
  }
  export default roundSaga;