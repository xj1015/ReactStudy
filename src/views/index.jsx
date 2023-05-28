import React, { Component } from 'react'
import {Demo,DemoTest} from './Hooks'
// import L from 'leaflet';
import L from "../components/LeafletLocal/leaflet.js"
import '../components/LeafletLocal/leaflet.css';
export default class COM extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }
  componentDidMount() {
    // 创建地图实例
    this.map = L.map(this.mapRef.current).setView([51.505, -0.09], 13);

    // 添加瓦片图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  componentWillUnmount(){
    this.map.remove();
  }

  render() {
    return (
      // <div style={{position: "absolute",left:"45%"}}>
      // <Demo></Demo>
      // <DemoTest></DemoTest>
      // </div>


      //添加leaflet模块
      <div ref={this.mapRef} style={{height: "1000px",width: "1000px"}} />

    )
  }
}
