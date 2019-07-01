const initialState = {
    text: 'enter name',
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT':
            return {
                text: action.payload,
            };
        default:
            return {
                ...state
            };
    }
};
export default rootReducer;