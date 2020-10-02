import { RSAA } from 'redux-api-middleware';
import * as types from './actionTypes';
import { mapStations } from './utils';

export const getStations = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:3000/stations',
    method: 'GET',
    types: [
      types.FETCH_STATIONS,
      {
        type: types.FETCH_STATIONS_SUCCESS,
        payload: mapStations,
      },
      {
        type: types.FETCH_STATIONS_FAILURE,
        payload: () => 'Something went wrong...',
      },
    ],
  },
});

export const toggleStations = id => ({
  type: types.TOGGLE_STSTION,
  payload: id,
});