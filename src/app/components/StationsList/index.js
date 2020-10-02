import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import stations from "../../../stations";
import './radioStation.css';
import minus from './minus.png';
import plus from './plus.png';
import moon from './moon.png';

function RadioStation  ({stations, toggleStations}) {
      return stations.map(station => {
        if(station.isPlaying){
          return ( 
            <div key={station.id}>
             <div className="list">
            <img className="minus" src={minus} alt="minus" />
            <img className="plus" src={plus} alt="plus" />
            <img className="img" src={moon} alt="moon" />
            </div>
             <p onChange={() => console.log("onChange")}>
               <button onClick={() => toggleStations(station.id)} className="btn">{station.station}<samp className="fm">{station.frequency}</samp></button>
               </p>
             <hr />
           </div>
          )
        } else {
          return (
             <div key={station.id}>
               <p>
                 <button onClick={() => toggleStations(station.id)} className="btn">{station.station}<samp className="fm">{station.frequency}</samp></button>
                 </p>
               <hr />
             </div>
          );
        }
      })
    }

    const enhance = connect(
      state => ({ stations: stations.selectors.getStations(state) }),
      dispatch => ({
        toggleStations: bindActionCreators(stations.actions.toggleStations, dispatch),
      })
    );
    
    export default enhance(RadioStation);