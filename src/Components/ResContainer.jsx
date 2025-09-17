import React from 'react'

const ResContainer = ({ resName, cuisine, image, rating, deliveryTime, costForTwo }) => {
  return (
    <div className="res-container">
      <div className='res-logo'>
        <img src={image} alt="res-logo" />
      </div>
      <div className="res-name">{resName}</div>
      <div className="res-cuisine">{cuisine}</div>
      <div className="res-rating">{rating}</div>
      <div className="res-delivery-time">{deliveryTime}</div>
      <div className="res-cost-for-two">Cost for two: {costForTwo}</div>
    </div>
  )
}

export default ResContainer