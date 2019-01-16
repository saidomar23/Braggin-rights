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
        yield dispatch({type: 'GET_FAVORITE' })
    }catch(error){
        console.log('error in addgame saga' , error);
        
    }
}
function* getFavorite(){
    try {
        const getResponse = yield call(axios.get, `/api/favorite`)
        yield dispatch({ type: 'SET_FAVORITE', payload: getResponse.data })
        // yield dispatch(({type: 'DISPLAY_FAVORITE', payload: getResponse.data}))
    } catch (error) {
        console.log('error in getting favorite saga', error);

    }
}
// function* displayFavorite(action){
//     try{
//         console.log('not in loop');
        
//         let favorites = action.payload;
//        for(let i=0; i< favorites.length; i++){
//            console.log('loop test:', favorites[i].game_id);
//            const apiResponse = yield call(axios.get , `/api/favoritelist/${favorites[i].game_id}`)
//            yield dispatch({type: 'SET_FAVORITELIST' , payload: apiResponse.data.results})
//        }

//     }catch(error){
//         console.log('error in favorite api saga call' , error);
        
//     }
// }


function* gameSaga() {
    yield takeEvery('GRAB_GAME', grabGame );
    yield takeEvery('ADD_GAME' , addGame);
    yield takeEvery('GET_FAVORITE' , getFavorite)
    // yield takeEvery('DISPLAY_FAVORITE' , displayFavorite)
  }
  export default gameSaga;