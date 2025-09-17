import React, { useState,useEffect, use } from 'react';
import ResContainer from './ResContainer';
import { IMG_CDN_URL } from '../utils/Constants';

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7237152&lng=83.3067747&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
   
  }



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