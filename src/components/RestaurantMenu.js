import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const [resInfo, setresInfo]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu= async ()=>{
        const data = await fetch( MENU_URL +resId);
        const json = await data.json();
        console.log(json)
        setresInfo(json.data)
        
    }
    if (resInfo===null) return <Shimmer/>;
    
    const{ name, cuisines, avgRating ,totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
    const{minDeliveryTime,maxDeliveryTime}= resInfo?.cards[2]?.card?.card?.info?.sla;
    const{offers}=resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
    const{itemCards, title}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return(
        <div className="respage">
            <h1 className="nameofres">{name}</h1>
            <div className="resblock">
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating}  ( {totalRatingsString} )</p>
                <p>{minDeliveryTime}-{maxDeliveryTime}mins</p>
            </div>
            <div className="offerblock">
                {offers.map(o=>
                   <p className="offerblocktwo"> {o?.info?.header} <br></br>  { o?.info?.couponCode} </p>   
                )}
            </div>  
            <div className="menu"><h3>-ˏˋ ~ M E N U ~ ˊˎ- </h3> </div>
            <div className="menublock">   

                <h2> {title}  </h2>
                {   
                    itemCards.map(o=>
                        <li className="menus" key={o?.card?.info?.id}> {o?.card?.info?.name} ₹{ o?.card?.info?.price/100} </li>)
                }
                {/* {
                    itemCards.map(o=>
                        <img className="food-logo" alt="food img" src={
                            CDN_URL+ o.card.info.imageId }></img>
                    )
                } */}
            </div>
        </div>
    )
}

export default RestaurantMenu;