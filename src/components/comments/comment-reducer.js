export function commentReducer(state, action) {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        case 'ADD_COMMENT':
            return [action.payload, ...state];
        case 'UPDATE_COMMENT':
            return state.map(comment =>
                comment.id === action.payload.id
                    ? action.payload
                    : comment
            );
        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.payload);
        default:
            return state;
    }
}      