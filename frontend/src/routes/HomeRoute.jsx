import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const [ favourites, setFavourites ] = useState([])

  const toggleFavourites = (photoId) => {
    if (!favourites.includes(photoId)) {
      setFavourites((prevFavourites) => [ ...prevFavourites, photoId ])
      return favourites;
    } else {
      setFavourites(favourites.filter((id) => id !== photoId));
      return favourites
    }
  }

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList photos={ props.photos } toggleFavourites={ toggleFavourites } favourites={ favourites } setDisplayModal={ props.setDisplayModal } setSelectedPhoto={ props.setSelectedPhoto } selectedPhoto={ props.selectedPhoto } showModal={ props.showModal } />
    </div>
  );
};


export default HomeRoute;
