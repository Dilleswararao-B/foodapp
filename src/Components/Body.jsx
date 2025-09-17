import React, { useState } from 'react';

import ResContainer from './ResContainer';
import resObj from '../utils/mockdata';
import { IMG_CDN_URL } from '../utils/Constants';

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(resObj);

  return (
    <div>
      <div className="filter">
        <button className='filter-btn' onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) => res?.card?.card?.info?.avgRating > 4.3
          );
          setListofRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className='res-list'>
        {listofRestaurants.map((item) => {
          const { card } = item;
          const { info } = card?.card || {};
          if (card?.card?.["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.Restaurant") return null;
          return (
            <ResContainer
              key={info.id}
              resName={info.name}
              cuisine={info.cuisines.join(', ')}
              image={info.cloudinaryImageId ? IMG_CDN_URL + info.cloudinaryImageId : "https://via.placeholder.com/200"}
              rating={info.avgRatingString || info.avgRating || "--"}
              deliveryTime={info.sla?.slaString || "--"}
              costForTwo={info.costForTwo || "--"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;