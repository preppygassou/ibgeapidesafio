import {combineReducers } from 'redux';
import county from './countyReducer';

const RootReducer = combineReducers({
  county,
});

export default RootReducer