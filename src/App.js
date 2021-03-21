import React, { useState } from 'react'
import './index.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'
import Search from './components/Search'
import Info from './components/Info'
import ChangeView from './components/ChangeView'

const App = () => {
  const [ query, setQuery ] = useState('')
  const [ data, setData ] = useState({
    ip: '',
    lat: 37.38605,
    lng: -122.08385,
    location: {
      region: '',
      city: '',
      postalCode: '',
      timezone: ''
    },
    isp: ''
  })

  const api_key = process.env.REACT_APP_API_KEY
  let url = `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${query}`

  const [map, setMap] = useState(null)
  const [mapZoom] = useState(12)
  console.log('mydata', data)

  
  return (
    <div className='main'>
      <div className='header'>
        <h1 className='header__title'>IP Address Tracker</h1>
        <Search setQuery={setQuery}/>
      </div>

      <Info data={data}/>
      
      {map ? <ChangeView map={map} mapZoom={mapZoom} url={url} setData={setData}/> : null}

      <div className='map'>
        <MapContainer className='map__container'
          center={[ data.lat, data.lng ]} 
          zoom={mapZoom} 
          scrollWheelZoom={false} 
          whenCreated={setMap}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  )
}

export default App;
