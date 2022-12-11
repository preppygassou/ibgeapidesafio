import { GET_COUNTIES_LIST_FAIL, GET_COUNTIES_LIST_REQUEST, GET_COUNTIES_LIST_SUCCESS, GET_COUNTY_DETAILS_LIST_FAIL, GET_COUNTY_DETAILS_LIST_SUCCESS, GET_COUNTY_DETAILS_REQUEST, GET_STATES_LIST_FAIL, GET_STATES_LIST_REQUEST, GET_STATES_LIST_SUCCESS } from "../constants";
import api from '../services/api';
import {Dispatch} from "redux";

export const getStatesLists = () => async (dispatch:Dispatch) => {
  dispatch({
    type: GET_STATES_LIST_REQUEST,
  });
  try {
    const { data } = await api.get("/estados");
    dispatch({ type: GET_STATES_LIST_SUCCESS, payload: data });
  } catch (error:any) {
    dispatch({ type:  GET_STATES_LIST_FAIL, payload: error.message });
  }
};

export const geCountiesListsByStateUF = (Uf:string) => async (dispatch:Dispatch) => {
  dispatch({
    type: GET_COUNTIES_LIST_REQUEST,
  });
  try {
    const { data } = await api.get(`/estados/${Uf}/municipios`);
    dispatch({ type: GET_COUNTIES_LIST_SUCCESS, payload: data });
  } catch (error:any) {
    dispatch({ type:  GET_COUNTIES_LIST_FAIL, payload: error.message });
  }
};

export const geCountydetails = (countyId:string) => async (dispatch:Dispatch) => {
  dispatch({
    type: GET_COUNTY_DETAILS_REQUEST,
  });
  try {
    const { data } = await api.get(`/municipios/${countyId}/distritos`);
    dispatch({ type: GET_COUNTY_DETAILS_LIST_SUCCESS, payload: data[0] });
  } catch (error:any) {
    dispatch({ type:  GET_COUNTY_DETAILS_LIST_FAIL, payload: error.message });
  }
};