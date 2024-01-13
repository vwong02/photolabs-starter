import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavourites, photoId, favourites }) {

  const isFavouritePhoto = favourites.includes(photoId)

  const handleFavIconClick = () => {
    toggleFavourites(photoId)
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={ handleFavIconClick } className="photo-list__fav-icon-svg">
        <FavIcon selected={ isFavouritePhoto } />
      </div>
    </div>
  );
}

export default PhotoFavButton;