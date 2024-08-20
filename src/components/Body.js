import RestaurantCard from './RestaurantCard';
import {useEffect, useState} from "react";
import Shimmer from './Shimmer';
const Body=()=> {
//local state variable
const [listOfRestaurants,setListofRestraurant ]=useState([]);
  
useEffect(()=>{
    fetchData();
},[]);

const fetchData= async()=>
{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =await data.json();
    console.log(json);
    setListofRestraurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
                <div className="filter">
                <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter(
                    (res)=> res.info.avgRating > 4.2);
                    setListofRestraurant(filteredList);
                }} 
                >Top Rated Restaurant</button>
                </div>
                <div className="res-container">
               {
                listOfRestaurants.map((restaurant) =>
                <RestaurantCard key={restaurant.info?.id} resData={restaurant}/>)
               }

               
                
            </div>
        </div>
    );
 };

 export default Body;