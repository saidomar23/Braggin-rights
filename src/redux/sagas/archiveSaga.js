import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';

function* getGames(){
    try{
       const getGamesResponse = yield call(axios.get , '/api/games')
        yield dispatch({type: 'SET_ARCHIVE' , payload:getGamesResponse.data.results })
    }catch(error){
        console.log('error in get games api' , error);
        
    }

}

function* getGamesSaga(){
yield takeEvery('GET_GAMES' , getGames)
}

export default getGamesSaga;