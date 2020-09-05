import mandatory from './mandatoryFormState';
import optional from './optionalFormState';
import result from './resultState';
import agree from './agreeFormState';
import { combineReducers } from 'redux';

const RootReducer = 
  combineReducers({
    mandatory, optional, result, agree
  });

export default RootReducer;