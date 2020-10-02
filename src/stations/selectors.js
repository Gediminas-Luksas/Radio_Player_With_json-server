import { NAME } from './constants';

export const getStations = state => state[NAME].stations;

export const getToggleStations = state => {
    const allStations = getStations(state);

    return allStations.filter(stations => stations.isPlaying);
};

export const isLoading = state => state[NAME].loding;
export const getError = state => state[NAME].error;
