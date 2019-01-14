const archive = (state = [], action) => {
    switch (action.type) {
        case 'SET_FRIEND':
            return action.payload
        default:
            return state;
    }
}

export default archive;