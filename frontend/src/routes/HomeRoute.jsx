import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const [ favourite, setFavourite ] = useState([])

  const toggleFavourite = (photoId) => {
    setFavourite((prevFavourite) => {
      const isFavourite = prevFavourite.includes(photoId)
      if (isFavourite) {
        return prevFavourite.filter((id) => id !== photoId)
      } else {
        return [ ...prevFavourite, photoId ]
      }
    })
  }

  const isFavPhotoExist = favourite.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList photos={ props.photos } toggleFavourite={ toggleFavourite } favourite={ favourite } />
    </div>
  );
};

export default HomeRoute;
