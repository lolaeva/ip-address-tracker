import React, { useState } from 'react'
import './index.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'
import Search from './components/Search'
import ChangeView from './components/ChangeView'

const App = () => {
  const [ query, setQuery ] = useState('8.8.8.8')
  const [ data, setData ] = useState({lat: 37.38605, long: -122.08385})

  const api_key = process.env.REACT_APP_API_KEY
  let url = `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${query}`

  const [map, setMap] = useState(null)
  const [mapZoom] = useState(12)

  return (
    <div>
      <Search setQuery={setQuery}/>
      {data ? <p>{data.lat} {data.long}</p> : <p></p>}
      {map ? <ChangeView map={map} mapZoom={mapZoom} url={url} setData={setData}/> : null}

      <MapContainer 
        className='map__container' 
        center={[data.lat, data.long]} 
        zoom={mapZoom} 
        scrollWheelZoom={false} 
        whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default App;
