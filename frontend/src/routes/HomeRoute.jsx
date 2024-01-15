import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ topics, photos, toggleFavourites, setFavourites, favourites, showModal }) => {

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList photos={ photos } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } showModal={ showModal } favourites={ favourites } />
    </div>
  );
};


export default HomeRoute;
