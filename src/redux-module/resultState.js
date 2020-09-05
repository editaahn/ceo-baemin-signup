import { createAction, handleActions } from 'redux-actions';

// 인풋의 message 세팅하는 액션

const SET_ID_RESULT = 'mandatory/SET_ID_RESULT';
const SET_PW_RESULT = 'mandatory/SET_PW_RESULT';
const SET_PW_CHECK_RESULT = 'mandatory/SET_PW_CHECK_RESULT';
const SET_EMAIL1_RESULT = 'mandatory/SET_EMAIL1_RESULT';
const SET_EMAIL2_RESULT = 'mandatory/SET_EMAIL2_RESULT';
const SET_NAME_RESULT = 'mandatory/SET_NAME_RESULT';
const SET_PHONE_RESULT = 'mandatory/SET_PHONE_RESULT';
const SET_PHONE_AUTH_RESULT = 'mandatory/SET_PHONE_AUTH_RESULT';

export const setIDResult = createAction(SET_ID_RESULT, result => result);
export const setPwResult = createAction(SET_PW_RESULT, result => result);
export const setPwCheckResult = createAction(SET_PW_CHECK_RESULT, result => result);
export const setEmail1Result = createAction(SET_EMAIL1_RESULT, result => result);
export const setEmail2Result = createAction(SET_EMAIL2_RESULT, result => result);
export const setNameResult = createAction(SET_NAME_RESULT, result => result);
export const setPhoneResult = createAction(SET_PHONE_RESULT, result => result);
export const setPhoneAuthResult = createAction(SET_PHONE_AUTH_RESULT, result => result);


const initialState = {
  result__id: { status: null, message: "" },
  result__password: { status: null, message: "" },
  result__passwordCheck: { status: null, message: "" },
  result__email1: { status: null, message: "" },
  result__email2: { status: null, message: "" },
  result__name: { status: null, message: "" },
  result__phone: { status: null, message: "" },
  result__phone_auth: { status: null, message: "" },
};


const result = handleActions(
  {
    // message 세팅
    [SET_ID_RESULT]: (state, action) => ({
      ...state,
      result__id: action.payload,
    }),
    [SET_PW_RESULT]: (state, action) => ({
      ...state,
      result__password: action.payload,
    }),
    [SET_PW_CHECK_RESULT]: (state, action) => ({
      ...state,
      result__passwordCheck: action.payload,
    }),
    [SET_EMAIL1_RESULT]: (state, action) => ({
      ...state,
      result__email1: action.payload,
    }),
    [SET_EMAIL2_RESULT]: (state, action) => ({
      ...state,
      result__email2: action.payload,
    }),
    [SET_NAME_RESULT]: (state, action) => ({
      ...state,
      result__name: action.payload,
    }),
    [SET_PHONE_RESULT]: (state, action) => ({
      ...state,
      result__phone: action.payload,
    }),
    [SET_PHONE_AUTH_RESULT]: (state, action) => ({
      ...state,
      result__phone_auth: action.payload,
    }),
  },
  initialState
);

export default result;