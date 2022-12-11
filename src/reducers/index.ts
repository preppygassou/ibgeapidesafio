import { GET_COUNTIES_LIST_FAIL, GET_COUNTIES_LIST_REQUEST, GET_COUNTIES_LIST_SUCCESS, GET_COUNTY_DETAILS_LIST_FAIL, GET_COUNTY_DETAILS_LIST_SUCCESS, GET_COUNTY_DETAILS_REQUEST, GET_STATES_LIST_FAIL, GET_STATES_LIST_REQUEST, GET_STATES_LIST_SUCCESS } from "../constants";

export const stateListReducer = (
  state = { loading: false},
  action:any
) => {
  switch (action.type) {
    case GET_STATES_LIST_REQUEST:
      return { loading: true };
    case GET_STATES_LIST_SUCCESS:
      return {
        loading: false,
        states: action.payload,
      };
    case GET_STATES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const countyListReducer = (
  state = { loading: false},
  action:any
) => {
  switch (action.type) {
    case GET_COUNTIES_LIST_REQUEST:
      return { loading: true };
    case GET_COUNTIES_LIST_SUCCESS:
      return {
        loading: false,
        counties: action.payload,
      };
    case GET_COUNTIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const countyDetailsReducer = (
  state = { loading: false },
  action:any
) => {
  switch (action.type) {
    case GET_COUNTY_DETAILS_REQUEST:
      return { loading: true };
    case GET_COUNTY_DETAILS_LIST_SUCCESS:
      return {
        loading: false,
        county: action.payload,
      };
    case GET_COUNTY_DETAILS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};