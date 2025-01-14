import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavourites, favourites, photoId }) {

  const isFavouritePhoto = favourites.includes(photoId)

  return (
    <div className="photo-list__fav-icon">
      <div onClick={ () => toggleFavourites(photoId) } className="photo-list__fav-icon-svg">
        { <FavIcon selected={ isFavouritePhoto } /> }
      </div>
    </div>
  );
}

export default PhotoFavButton;