/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Map, TileLayer, withLeaflet, MapControl } from "react-leaflet";
import MapInfo from "./MapInfo";
import Routing from "./RoutingMachine";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 17.4,
      lng: 78.4,
      zoom: 7,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.isMapInit && <Routing map={this.map} />}
      </Map>
    );
  }
}

export default MapComponent;