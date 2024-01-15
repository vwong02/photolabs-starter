import React from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = ({ photo, toggleFavourites, setPhotoSelected, favourites }) => {

  const { id, location, urls, user } = photo

  const handleClick = () => {
    setPhotoSelected(photo)
  }


  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavourites={ toggleFavourites } favourites={ favourites } photoId={ id } />
      <img className="photo-list__image" src={ urls.regular } onClick={ handleClick } />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={ user.profile } />
        <div className="photo-list__user-info" >
          <span>{ user.username }</span>
          <span className="photo-list__user-location" >{ location.city } { location.country }</span>
        </div>
      </div>
    </div>
  )
};


export default PhotoListItem;
