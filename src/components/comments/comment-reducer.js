export function commentReducer(state, action) {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        case 'ADD_COMMENT':
            return [action.payload, ...state];
        default:
            return state;
    }
}      