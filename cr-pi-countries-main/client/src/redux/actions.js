import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const DELETE_ACTIVITY_BY_ID = "DELETE_ACTIVITY_BY_ID";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";

export const getCountries = () => {
  return async (dispatch) => {
    const response = await axios.get("/countries");
    const { data } = response;
    return dispatch({
      type: "GET_COUNTRIES",
      payload: data,
    });
  };
};

export const getCountriesByName = (value) => {
  return async (dispatch) => {
    const response = await axios.get(`/countries/name?country=${value}`);
    const { data } = response;
    return dispatch({
      type: "GET_COUNTRIES_BY_NAME",
      payload: data,
    });
  };
};

export const postActivities = (activitie) => {
  return async (dispatch) => {
    const response = await axios.post("/activities", activitie);
    const { data } = response;
    return dispatch({
      type: "POST_ACTIVITIES",
      payload: data.activity,
    });
  };
};

export const filter = (continent) => {
  return {
    type: FILTER,
    payload: continent,
  };
};

export const orderCountries = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const response = await axios.get("/activities");
    const { data } = response;
    return dispatch({
      type: GET_ACTIVITIES,
      payload: data,
    });
  };
};

export const filterByActivitie = (activitie) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activitie,
  };
};

export const deleteActivityById = (idActivity, idPais) => {
  return async (dispatch) => {
    const response = await axios.delete(`/countries/${idPais}/${idActivity}`);
    const { data } = response;
    return dispatch({
      type: DELETE_ACTIVITY_BY_ID,
      payload: data,
    });
  };
};

export const getCountryById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/countries/${id}`);
    const { data } = response;
    return dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: data,
    });
  };
};
