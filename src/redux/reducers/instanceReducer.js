const instance = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INSTANCE':
        let stat;
        action.payload.map(round =>{
            stat = round
            return round
        })
            return stat
        default:
            return state;
    }
}

export default instance;