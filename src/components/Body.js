import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body =()=>{

    const [listofRes , setlistofRes]= useState([]);
    const [filteredlistofRes, setfilteredlistofRes]=useState([]);
    const[searchText, setsearchText]=useState("");


    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6951409&lng=75.8758799&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       };




    return listofRes.length===0 ? <Shimmer/> : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-btn" value ={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}> 
                    </input>
                    <button
                    onClick={()=>{
                        const updatedsearch= listofRes.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setfilteredlistofRes(updatedsearch);
                    }}
                    >search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const yy = listofRes.filter((re)=> {return (re.info.avgRating >4)})

                    setfilteredlistofRes(yy);
                    console.log(setlistofRes)
                }
                }> Top-rated Restaurants</button>   
                         
            </div>
            <div className="res-container">
            
            {
                filteredlistofRes.map((res)=>
                // <Link className="filterdata" to={"/restaurants/"+res.info.id}>
                <RestaurantCard key={res.info.id} resdata={res} />
                //  </Link>
                )
            }
          
            </div>
        </div>
    )
}
export default Body;