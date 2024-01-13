import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ topics, photos, showModal }) => {

  const [ favourites, setFavourites ] = useState([])

  const toggleFavourites = (photoId) => {
    if (!favourites.includes(photoId)) {
      setFavourites((prevFavourites) => [ ...prevFavourites, photoId ])
      return favourites;
    } else {
      setFavourites(favourites.filter((id) => id !== photoId));
      return favourites;
    }
  }

  const isFavPhotoExist = favourites.length > 0;


  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList photos={ photos } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } showModal={ showModal } favourites={ favourites } />
    </div>
  );
};


export default HomeRoute;
