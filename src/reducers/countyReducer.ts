import { GET_COUNTIES_LIST_FAIL, GET_COUNTIES_LIST_REQUEST, GET_COUNTIES_LIST_SUCCESS, GET_COUNTY_DETAILS_FAIL, GET_COUNTY_DETAILS_REQUEST, GET_COUNTY_DETAILS_SUCCESS, GET_STATES_LIST_FAIL, GET_STATES_LIST_REQUEST, GET_STATES_LIST_SUCCESS } from "../constants";

const initialState = {
  allCounties: null,
  singleCounty: null,
  states: null,
  error: false,
  loading: false,
};

const countyReducer = (
  state = initialState,
  action:any
) => {
  switch (action.type) {
    case GET_STATES_LIST_REQUEST:
      return {...state, loading: true };
    case GET_STATES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        states: action.payload,
      };
    case GET_STATES_LIST_FAIL:
      return {
        ...state, 
        loading: false, 
        error: action.payload 
      };
    case GET_COUNTIES_LIST_REQUEST:
      return {...state, loading: true };
    case GET_COUNTIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        allCounties: action.payload,
      };
    case GET_COUNTIES_LIST_FAIL:
      return {
        ...state,
        loading: false, 
        error: action.payload 
      };
      case GET_COUNTY_DETAILS_REQUEST:
      return {...state, loading: true };
    case GET_COUNTY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        singleCounty: action.payload,
      };
    case GET_COUNTY_DETAILS_FAIL:
      return {
        ...state,
         loading: false,
         error: action.payload 
        };
    default:
      return state;
  }
};

export default countyReducer