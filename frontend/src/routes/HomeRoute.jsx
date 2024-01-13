import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';



const HomeRoute = ({ topics, photos, showModal, toggleFavourites, setFavourites, favourites, isFavPhotoExist }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList hotoList photos={ photos } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } showModal={ showModal } favourites={ favourites } />
    </div>
  );
};


export default HomeRoute;
