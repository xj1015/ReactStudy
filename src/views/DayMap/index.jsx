import React, { Component } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import '../../components/LeafletLocal/leaflet.css';

const position = [30.386513, 111.252980]

export default class DayMap extends Component {
    
  render() {
    return (
        <MapContainer center={position} zoom={13} style={{ width: '100vw', height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={L.divIcon({ html: '我是 div icon' })}/>
      </MapContainer>
    )
  }
}
