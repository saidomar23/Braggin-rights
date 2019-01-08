const archive = (state = [], action) => {
    switch (action.type) {
        case 'SET_ARCHIVE':
            return action.payload
        default:
            return state;
    }
}

export default archive;