import React ,{useState} from "react"

import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import ReactTooltip from "react-tooltip";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function App() {
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
      <h1>Let's Build an Awesome Map!</h1>

    </div>
    
  )
}