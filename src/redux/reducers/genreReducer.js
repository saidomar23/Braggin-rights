const gameGenre = (state = [], action) =>{
    if(action.type === 'SET_GAME'){
    let genres = [];
       action.payload.genres.map(genre =>{
                genres.push(genre.name)
                return genres
       })
       return genres;
    }
    else{
        return state;
    }
}

export default gameGenre;