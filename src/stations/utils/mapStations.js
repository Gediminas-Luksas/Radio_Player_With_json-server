import { getJSON } from 'redux-api-middleware';

export default (action, state, payload) =>
  getJSON(payload).then(stations =>
    stations.map(station => ({
      ...station
    }))
  );
