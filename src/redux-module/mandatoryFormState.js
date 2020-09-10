import { createAction, handleActions } from "redux-actions";

// 인풋의 value 세팅하는 액션

const SET_ID = "mandatory/SET_ID";
const SET_PW = "mandatory/SET_PW";
const SET_PW_TWICE = "mandatory/SET_PW_TWICE";
const SET_EMAIL1 = "mandatory/SET_EMAIL1";
const SET_EMAIL2 = "mandatory/SET_EMAIL2";
const SET_EMAIL2_EDITABLE = "mandatory/SET_EMAIL2_EDITABLE";
const SET_NAME = "mandatory/SET_NAME";
const SET_PHONE = "mandatory/SET_PHONE";
const SET_PHONE_AUTH_DIGIT = "mandatory/SET_PHONE_AUTH_DIGIT";
const SET_TIMER_ON = "mandatory/SET_TIMER_ON";
const SET_TIME = "mandatory/SET_TIME";

export const setID = createAction(SET_ID, (id) => id);
export const setPw = createAction(SET_PW, (pw) => pw);
export const setPwTwice = createAction(SET_PW_TWICE, (pw) => pw);
export const setEmail1 = createAction(SET_EMAIL1, (addr) => addr);
export const setEmail2 = createAction(SET_EMAIL2, (addr) => addr);
export const setEmail2Editable = createAction(SET_EMAIL2_EDITABLE, (bool) => bool);
export const setName = createAction(SET_NAME, (name) => name);
export const setPhone = createAction(SET_PHONE, (phone) => phone);
export const setPhoneAuthDigit = createAction(SET_PHONE_AUTH_DIGIT, (digit) => digit);
export const setTimerOn = createAction(SET_TIMER_ON, (bool) => bool);
export const setTime = createAction(SET_TIME, (time) => time);

const initialState = {
  id: "",
  password: "",
  passwordTwice: "",
  email1: "",
  email2: { value: "", editable: false },
  name: "",
  phone: "",
  phone_auth_digit: null,
  timer: {
    timerOn: false,
    remainSec: 10,
    min: 0,
    sec: 10,
  },
};

const mandatory = handleActions(
  {
    // value 세팅
    [SET_ID]: (state, action) => ({
      ...state,
      id: action.payload,
    }),
    [SET_PW]: (state, action) => ({
      ...state,
      password: action.payload,
    }),
    [SET_PW_TWICE]: (state, action) => ({
      ...state,
      passwordTwice: action.payload,
    }),
    [SET_EMAIL1]: (state, action) => ({
      ...state,
      email1: action.payload,
    }),
    [SET_EMAIL2]: (state, action) => ({
      ...state,
      email2: { ...state.email2, value: action.payload },
    }),
    [SET_EMAIL2_EDITABLE]: (state, action) => ({
      ...state,
      email2: { ...state.email2, editable: action.payload },
    }),
    [SET_NAME]: (state, action) => ({
      ...state,
      name: action.payload,
    }),
    [SET_PHONE]: (state, action) => ({
      ...state,
      phone: action.payload,
    }),
    [SET_PHONE_AUTH_DIGIT]: (state, action) => ({
      ...state,
      phone_auth_digit: action.payload,
    }),
    [SET_TIMER_ON]: (state, action) => ({
      ...state,
      timer: { ...state.timer, timerOn: action.payload },
    }),
    [SET_TIME]: (state, action) => ({
      ...state,
      timer: {
        ...state.timer,
        min: action.payload.min,
        sec: action.payload.sec,
        remainSec: action.payload.remainSec,
      },
    }),
  },
  initialState
);

export default mandatory;