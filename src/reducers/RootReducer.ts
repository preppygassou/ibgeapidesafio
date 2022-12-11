import {combineReducers } from 'redux';
import { countyDetailsReducer, countyListReducer, stateListReducer } from '../reducers';

const RootReducer = combineReducers({
  stateList: stateListReducer,
  countyList: countyListReducer,
  countyDetails: countyDetailsReducer,  
});

export default RootReducer