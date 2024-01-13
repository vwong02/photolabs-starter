import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavourites, favourites, photoId, setFavourites }) {

  // const isFavourite = favourites.includes(photoId) ? setFavourites(true) : setFavourites(false)

  // const like = function () {
  //   return (
  //     favourite.includes(photoId) ? setHeartIcon(true) : setHeartIcon(false)
  //   )
  // }

  const handleFavIconClick = () => {
    toggleFavourites(photoId)
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={ handleFavIconClick } className="photo-list__fav-icon-svg">
        <FavIcon selected={ favourites } />
        {/* { setFavourites } ?  <FavIcon selected={ favourites } /> : <FavIcon selected={ !favourites } /> */ }
      </div>
    </div>
  );
}

export default PhotoFavButton;