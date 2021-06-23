import { useEffect } from 'react'
import axios from 'axios'

const ChangeView = ({map, mapZoom, url, setData}) => {
  useEffect(() => {
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


    getApi(url, map)
  }, [map, mapZoom, url, setData])

  return null
}

export default ChangeView