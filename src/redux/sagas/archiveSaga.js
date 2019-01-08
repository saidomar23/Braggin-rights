import { put as dispatch, takeEvery , call} from 'redux-saga/effects';
import axios from 'axios';

function* getGames(){
    try{
        getGamesResponse = yield call(axios.get , '/api/games')
        yield dispatch({type: 'SET_ARCHIVE' , payload:getGamesResponse })
    }catch(error){
        console.log('error in get games api' , error);
        
    }

}

function* getGamesSaga(){

}
