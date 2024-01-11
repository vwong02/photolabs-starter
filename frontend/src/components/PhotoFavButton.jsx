import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  // const [ heart, setHeart ] = useState(false)

  // const like = () => {
  //   return (
  //     setHeart(prevHeart => !prevHeart)
  //   )
  // }

  const isHeart = props.heart.includes(props.photoId) ? true : false

  const handleHeartClick = () => {
    props.toggleHeart(props.photoId)
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={ handleHeartClick } className="photo-list__fav-icon-svg">

        { isHeart ? <FavIcon selected={ isHeart } /> : <FavIcon /> }

        {/* <FavIcon selected={ props.heart } /> */ }

      </div>
    </div>
  );
}

export default PhotoFavButton;