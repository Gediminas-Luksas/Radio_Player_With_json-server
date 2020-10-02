export default (stations, id) =>
stations.map(station => {
    if (id === station.id) {
      return { ...station, isPlaying: !station.isPlaying };
    } else if(station.isPlaying){
      return { ...station, isPlaying: false};
    }
    return station;
  });
