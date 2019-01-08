





function* getGames(action) {
    try {
        const giphyResponse = yield call(axios.get, `/api/games/${action.payload}`)
        yield dispatch({ type: 'SET_GAMES', payload: giphyResponse.data.data })
    } catch (error) {
        console.log('error getting giant bomb games', error);

    }
}