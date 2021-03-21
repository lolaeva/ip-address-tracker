import React, { useState } from 'react'
// import axios from 'axios'

const Info = ({ data }) => {
  return (
    <div class="info">
      <div class="info__item info__item__ip">
        <p class="info__item__header">IP Address</p>
        <p class="info__item__info">{data.ip}</p>
      </div>
      <div class="info__item info__item__location">
        
        <p class="info__item__header">Location</p>
        <p class="info__item__info">{data.location.city}, {data.location.region}<br></br>{data.location.postalCode}</p>
      </div>
      <div class="info__item info__item__timezone">
        <p class="info__item__header">Timezone</p>
        <p class="info__item__info">{data.location.timezone}</p>
      </div>
      <div class="info__item info__item__isp">
        <p class="info__item__header">ISP</p>
        <p class="info__item__info">{data.isp}</p>
      </div>
    </div>
  )
}

export default Info