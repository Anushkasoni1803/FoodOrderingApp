import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const{resdata}=props

    const{ cloudinaryImageId,name,cuisines,costForTwo,avgRating, veg } = resdata?.info;
    const{ deliveryTime } = resdata.info?.sla;


    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} >
            <img className="res-logo"
            alt="food img" src={
            CDN_URL+
            cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h6>{costForTwo}</h6>
            <h6>{avgRating}</h6>
            <h6>{deliveryTime} mins</h6>
            

        </div>
    )
}

export default RestaurantCard;