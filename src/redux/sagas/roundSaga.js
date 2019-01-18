import {  put as dispatch ,takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';


function* postRound(action) {
    try {
        yield call(axios.post, `/api/round` ,action.payload )
    } catch (error) {
        console.log('error in round saga', error);

    }
}

function* getResults(action){
    try{
        const getResponse = yield call(axios.get , '/api/round' , action.payload)
        yield dispatch({type: 'SET_RESULTS ' , payload: getResponse})
    }catch(error){
        console.log('error in get results ' , error);
        
    }
}

function* roundSaga() {
    yield takeEvery('ADD_ROUND', postRound );
    yield takeEvery('GET_RESULTS' , getResults)
  }
  export default roundSaga;