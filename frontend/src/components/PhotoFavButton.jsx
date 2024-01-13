import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const isFavourites = props.favourites.includes(props.photoId)

  // const like = function () {
  //   return (
  //     props.favourites.includes(props.photoId) ? setHeartIcon(true) : setHeartIcon(false)
  //   )
  // }

  const handleFavIconClick = () => {
    props.toggleFavourites(props.photoId)
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={ handleFavIconClick } className="photo-list__fav-icon-svg">
        <FavIcon selected={ isFavourites } />
      </div>
    </div>
  );
}

export default PhotoFavButton;