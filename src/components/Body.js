import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";

const Body =()=>{

    const [listofRes , setlistofRes]= useState([]);

    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6951409&lng=75.8758799&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       };


    return listofRes.length===0 ? <Shimmer/> : (
        <div className="Body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const yy = listofRes.filter((re)=> {return (re.info.avgRating >4)})

                    setlistofRes(yy);
                    console.log(setlistofRes)
                }
                }> Top-rated Restaurants</button>   
                         
            </div>
            <div className="res-container">
            
            {
                listofRes.map((res)=> <RestaurantCard 
                key={res.info.id}
                resdata={res} />)
            }
          
            </div>
        </div>
    )
}
export default Body;