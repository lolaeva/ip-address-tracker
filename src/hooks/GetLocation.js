// import { useState, useEffect } from 'react'
// import axios from 'axios'


// const GetLocation = ip => {
//   const [ data, setData ] = useState()

//   const api_key = process.env.REACT_APP_API_KEY
//   let url = `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ip}`

//   const getApi = async (url) => {
//     const {data} = await axios.get(url)
//     console.log(data)
//     setData({
//       lat: data.location.lat, 
//       long: data.location.lng,
//     })

//   } // end

//   useEffect(() => {
//     getApi(url)
//   }, [url])

//   return data
// }

// export default GetLocation