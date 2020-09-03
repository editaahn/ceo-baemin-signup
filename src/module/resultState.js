import { createAction, handleActions } from 'redux-actions';

// 인풋의 message 세팅하는 액션

const SET_ID_MESSAGE = 'mandatory/SET_ID_MESSAGE';
const SET_PW_MESSAGE = 'mandatory/SET_PW_MESSAGE';
const SET_PW_CHECK_MESSAGE = 'mandatory/SET_PW_CHECK_MESSAGE';
const SET_EMAIL1_MESSAGE = 'mandatory/SET_EMAIL1_MESSAGE';
const SET_EMAIL2_MESSAGE = 'mandatory/SET_EMAIL2_MESSAGE';
const SET_NAME_MESSAGE = 'mandatory/SET_NAME_MESSAGE';
const SET_PHONE_MESSAGE = 'mandatory/SET_PHONE_MESSAGE';

export const setIDMessage = createAction(SET_ID_MESSAGE, message => message);
export const setPwMessage = createAction(SET_PW_MESSAGE, message => message);
export const setPwCheckMessage = createAction(SET_PW_CHECK_MESSAGE, message => message);
export const setEmail1Message = createAction(SET_EMAIL1_MESSAGE, message => message);
export const setEmail2Message = createAction(SET_EMAIL2_MESSAGE, message => message);
export const setNameMessage = createAction(SET_NAME_MESSAGE, message => message);
export const setPhoneMessage = createAction(SET_PHONE_MESSAGE, message => message);


const initialState = {
  result__id: { status: null, message: "" },
  result__password: { status: null, message: "" },
  result__passwordCheck: { status: null, message: "" },
  result__email1: { status: null, message: "" },
  result__email2: { status: null, message: "" },
  result__name: { status: null, message: "" },
  result__phone: { status: null, message: "" },
};


const result = handleActions(
  {
    // message 세팅
    [SET_ID_MESSAGE]: (state, action) => ({
      ...state,
      result__id: action.payload,
    }),
    [SET_PW_MESSAGE]: (state, action) => ({
      ...state,
      result__password: action.payload,
    }),
    [SET_PW_CHECK_MESSAGE]: (state, action) => ({
      ...state,
      result__passwordCheck: action.payload,
    }),
    [SET_EMAIL1_MESSAGE]: (state, action) => ({
      ...state,
      result__email1: action.payload,
    }),
    [SET_EMAIL2_MESSAGE]: (state, action) => ({
      ...state,
      result__email2: action.payload,
    }),
    [SET_NAME_MESSAGE]: (state, action) => ({
      ...state,
      result__name: action.payload,
    }),
    [SET_PHONE_MESSAGE]: (state, action) => ({
      ...state,
      result__phone: action.payload,
    }),
  },
  initialState
);

export default result;