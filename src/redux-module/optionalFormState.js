import { createAction, handleActions } from "redux-actions";

const SET_EDITABLE = "optional/SET_EDITABLE";
const SET_ADDRESS = "optional/SET_ADDRESS";
const SET_DETAIL_ADDRESS = "optional/SET_DETAIL_ADDRESS";

export const setEditable = createAction(SET_EDITABLE);
export const setAddress = createAction(SET_ADDRESS, (address) => address);
export const setDetailAddress = createAction(SET_DETAIL_ADDRESS, (address) => address);

const initialState = {
  editable: false,
  zonecode: null,
  address: "",
  old_address: "",
  detail_address: "",
};

const optional = handleActions(
  {
    [SET_EDITABLE] : (state) => ({
      ...state,
      editable: !state.editable
    }),
    [SET_ADDRESS] : (state, action) => ({
      ...state,
      address: action.payload.address,
      old_address: action.payload.old_address,
      zonecode: action.payload.zonecode,
    }),
    [SET_DETAIL_ADDRESS] : (state, action) => ({
      ...state,
      detail_address: action.payload,
    }),
  }, initialState
)

export default optional;