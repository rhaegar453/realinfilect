import * as actions from '../ActionTypes/index';

const initialState = {
    loggedIn: false,
    email: null,
    password: null,
    loading: false,
    error: true
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SUBMIT_FORM_START:
            return { loading: true }
        case actions.SUBMIT_FORM_SUCCESS:
            return { loading: false, loggedIn: true }
        case actions.SUBMIT_FORM_FAILURE:
            return { loading: false, loggedIn: false, error: true }
        default:
            return { ...state };
    }
}


export default reducer;