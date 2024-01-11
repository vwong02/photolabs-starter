import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"


const PhotoListItem = (props) => {

  const { location, urls, user } = props.photo

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={ urls.regular } />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={ user.profile } />
        <div className="photo-list__user-info" >
          <p>{ user.username }</p>
          <p className="photo-list__user-location" >{ location.city } { location.country }</p>
        </div>
      </div>
    </div>
  )
};


export default PhotoListItem;
