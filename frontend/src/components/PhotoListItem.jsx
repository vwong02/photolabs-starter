import React, { useState } from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = ({ photo, toggleFavourites, favourites, setFavourites, showModal }) => {

  const { id, location, urls, user } = photo

  const handleClick = () => {
    showModal(photo)
    setFavourites(photo)
  }


  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavourites={ toggleFavourites } favourites={ favourites } photoId={ id } setFavourites={ setFavourites } />
      <img className="photo-list__image" src={ urls.regular } onClick={ handleClick } />
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
