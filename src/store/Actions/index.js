import * as actions from '../ActionTypes/index';

export const submitForm = ({email, password}) => { 
    return { type: actions.SUBMIT_FORM , payload:{email, password}}
};
export const submitFormSuccess = () => {
    console.log("Submit form success");
    return { type: actions.SUBMIT_FORM_SUCCESS }
};
export const submitFormFailure = () => ({ type: actions.SUBMIT_FORM_FAILURE });
