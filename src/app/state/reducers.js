import { combineReducers } from 'redux';
import stations from '../../stations';

export default combineReducers({
  [stations.constants.NAME]: stations.reducer,
});
