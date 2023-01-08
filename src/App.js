import React ,{useState,useEffect} from "react"

import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { ZoomableGroup } from "react-simple-maps"
//import { Marker } from "react-simple-maps"

import {Tooltip as ReactTooltip} from "react-tooltip";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function App() {

  const[countries,setCountries] = useState([])

  const getData = () =>{
    fetch('http://localhost:3004/countries', {
       header:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
       }
    })
    .then(res => res.json())
    .then((data) => {setCountries(data)})

  }
  useEffect(() => {
    getData()
  },[])

  return (
    <div
      className = 'App'
      style ={{
        width:'100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "centre",
        alignItems:"centre",
      }}
    >
      
      <h1><ReactTooltip>{countries}</ReactTooltip></h1>
      <div style={{width:'700px' , borderStyle:'double'}}>
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                <Geography 
                  key={geo.rsmKey} 
                  geography={geo} 
                  onMouseEnter ={() => {
                    const {name} = geo.properties
                    setCountries(`${name}`);
 
                  }}
                  onMouseLeave = {() =>{
                    setCountries("");
                  }} 
                  style ={{
                    hover: {
                      fill: "#F53",
                      outline:'none' 
                    }
                  }}/>
                ))
              }
            </Geographies>
          </ZoomableGroup> 
        </ComposableMap>
      </div>
    </div>
    
  )
}