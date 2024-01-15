import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ topics, photos, selectedPhoto, favourites, toggleFavourites, setPhotoSelected }) => {

  const isFavPhotoExist = favourites.length > 0;



  return (
    <div className="home-route">

      <TopNavigationBar topics={ topics } isFavPhotoExist={ isFavPhotoExist } />

      <PhotoList photos={ photos } toggleFavourites={ toggleFavourites } selectedPhoto={ selectedPhoto } setPhotoSelected={ setPhotoSelected } favourites={ favourites } />
    </div>

  );
};


export default HomeRoute;
