import React from "react";
import RestaurantCardCSS from "./styles.module.css";
import { CLOUDINARY_URL } from "../../common/constants";

const RestaurantCard = (props) => {
  return (
    <div id={RestaurantCardCSS.container}>
      <img src={CLOUDINARY_URL + props.cloudinaryImageId} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.costForTwo}</p>
      <span>{props.avgRating}</span>
      <span>{props.totalRatingsString}</span>
    </div>
  );
};

export default RestaurantCard;
