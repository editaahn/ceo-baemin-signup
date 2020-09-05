import { createAction, handleActions } from 'redux-actions';

const SET_AGREE_HANDLER = 'agree/SET_AGREE_HANDLER';
const SET_AGREE_MANDATORY = 'agree/SET_AGREE_MANDATORY';
const SET_AGREE_OPTIONAL = 'agree/SET_AGREE_OPTIONAL';

export const setAgreeHandler = createAction(SET_AGREE_HANDLER, bool => bool);
export const setAgreeMandatory = createAction(SET_AGREE_MANDATORY, bool => bool);
export const setAgreeOptional = createAction(SET_AGREE_OPTIONAL, bool => bool);

const initialState = {
  agree__handler: false,
  agree__mandatory: false,
  agree__optional: false
}

const agree = handleActions(
  {
    [SET_AGREE_HANDLER] : (state, action) => ({
      ...state, 
      agree__handler: action.payload
    }),
    [SET_AGREE_MANDATORY] : (state, action) => ({
      ...state, 
      agree__mandatory: action.payload
    }),
    [SET_AGREE_OPTIONAL] : (state, action) => ({
      ...state, 
      agree__optional: action.payload
    }),
  }, initialState
);

export default agree;