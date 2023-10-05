import {
  DELETE_ACTIVITY_BY_ID,
  FILTER,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  ORDER,
  POST_ACTIVITIES,
} from "./actions";

const initialState = {
  allCountries: [],
  copyCountries: [],
  activities: [],
  allActivities: [],
  countryById: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload,
      };
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload,
      };
    case POST_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };
    case FILTER:
      const countriesFiltered =
        action.payload === "Show All"
          ? state.copyCountries
          : state.copyCountries.filter(
              (country) => country.region === action.payload
            );
      return {
        ...state,
        allCountries: countriesFiltered,
      };
    case FILTER_BY_ACTIVITY:
      const countriesByActivity =
        action.payload === "Show All"
          ? state.copyCountries.filter(
              (country) => country.Activities.length > 0
            )
          : state.copyCountries.filter((country) =>
              country.Activities?.some(
                (activitie) => activitie.name === action.payload
              )
            );
      return {
        ...state,
        allCountries: countriesByActivity,
      };
    case ORDER:
      const countriesCopy = [...state.allCountries];
      if (action.payload === "APopulation") {
        countriesCopy.sort((a, b) => a.population - b.population);
      } else if (action.payload === "DPopulation") {
        countriesCopy.sort((a, b) => b.population - a.population);
      } else if (action.payload === "AAlphabetic") {
        countriesCopy.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "DAlphabetic") {
        countriesCopy.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        allCountries: countriesCopy,
      };
    case DELETE_ACTIVITY_BY_ID:
      return {
        ...state,
        countryById: action.payload,
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryById: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
