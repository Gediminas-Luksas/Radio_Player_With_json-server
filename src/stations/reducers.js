import { toggleStationById } from './utils';
import * as types from './actionTypes';

const DEFAULT_STATE = {
  stations: [],
  error: null,
  loading: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.FETCH_STATIONS:
      return { ...state, loading: true };
    case types.FETCH_STATIONS_SUCCESS:
      return { ...state, loading: false, stations: action.payload };
    case types.FETCH_STATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload }; 
    case types.TOGGLE_STSTION:
      return {
        ...state,
        stations: toggleStationById(state.stations, action.payload),
      };

    default:
      return state;
  }
};
