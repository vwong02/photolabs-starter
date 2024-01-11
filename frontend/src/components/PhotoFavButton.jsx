import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const isFavourite = props.favourite.includes(props.photoId) ? true : false

  const handleFavIconClick = () => {
    props.toggleFavourite(props.photoId)
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={ handleFavIconClick } className="photo-list__fav-icon-svg">
        { isFavourite ? <FavIcon selected={ isFavourite } /> : <FavIcon /> }
      </div>
    </div>
  );
}

export default PhotoFavButton;