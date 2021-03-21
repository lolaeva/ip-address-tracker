import React, { useEffect } from 'react'
import axios from 'axios'

const ChangeView = ({map, mapZoom, url, setData}) => {
  const getApi = async (url, map) => {
    const {data} = await axios.get(url)
    console.log(data)
    setData({
      ip: data.ip,
      lat: data.location.lat,
      lng: data.location.lng,
      location: {
        city: data.location.city, 
        region: data.location.region,
        postalCode: data.location.postalCode,
        timezone: data.location.timezone,
      },
      isp: data.isp
    })
    
    map.setView([ data.location.lat, data.location.lng ], mapZoom)
  } // end
  
  useEffect(() => {
    getApi(url, map)
  }, [url, map])

  return null
}

export default ChangeView