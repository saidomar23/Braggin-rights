const favorite = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITELIST':
            return [...state ,action.payload]
        default:
            return state;
    }
}

export default favorite;