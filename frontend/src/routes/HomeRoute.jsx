import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from "hooks/useApplicationData";




const HomeRoute = ({ topics, photos, isFavPhotoExist }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList photos={ photos } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } showModal={ showModal } favourites={ state.favourites } />
    </div>
  );
};


export default HomeRoute;
