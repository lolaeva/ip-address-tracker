import React, { useEffect } from 'react'
import axios from 'axios'

const ChangeView = ({map, mapZoom, url, setData}) => {
  const getApi = async (url, map) => {
    const {data} = await axios.get(url)
    setData({
      lat: data.location.lat, 
      long: data.location.lng,
    })
    
    map.setView([data.location.lat, data.location.lng], mapZoom)
  } // end
  
  useEffect(() => {
    getApi(url, map)
  }, [url, map])

  return null
}

export default ChangeView