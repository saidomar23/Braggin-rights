
let genreName;

const gameGenre = (state = '', action) =>{
    if(action.type === 'SET_GAME'){
       action.payload.genres.map(genre =>{
        genreName = genre.name
           return genreName
       })
       return genreName
    }
    else{
        return state;
    }
}

export default gameGenre;