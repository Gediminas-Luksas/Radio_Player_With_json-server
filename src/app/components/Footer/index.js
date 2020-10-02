import React from 'react';
import { connect } from 'react-redux';
import stations from "../../../stations";
import './footer.css';

function Footer ({stations}) {
  return (
    <div className="footer">
    <h4 className="footer_heder">CURRENTLY PLAYING</h4>
    <p className="title">{
    stations.map(station => {
      return station.station
    })
    }
    </p>
    </div>
  )
    
  

}

const enhance = connect(
  state => ({
    stations: stations.selectors.getToggleStations(state),
  })
);

export default enhance(Footer);