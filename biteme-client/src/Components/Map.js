import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
    // width: '100%',
    // height: '500px'
  };

export class MapContainer extends Component {
    render() {
      return (
        <div style={{position:'relative', width:'100%', height:'600px'}}>
          <Map
            google={this.props.google}
            zoom={13}
            style={{width:'100%', height:'600px', position:'relative'}}
            initialCenter={{
              lat: 32.0853,
              lng: 34.7818
            }}
          />
        </div>  
    )}
  }

export default GoogleApiWrapper({
  apiKey: "AIzaSyBkxP0uOzCNjtByiZD1KccRs7GFfKy_7ss",
})(MapContainer);