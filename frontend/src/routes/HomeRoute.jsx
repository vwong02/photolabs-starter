import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const [ favourite, setFavourite ] = useState([])

  const toggleFavourite = (photoId) => {
    if (!favourite.includes(photoId)) {
      setFavourite((prevFavourite) => [ ...prevFavourite, photoId ])
      return favourite;
    } else {
      setFavourite(favourite.filter((id) => id !== photoId));
      return favourite
    }
  }

  const isFavPhotoExist = favourite.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } isFavPhotoExist={ isFavPhotoExist } />
      <PhotoList photos={ props.photos } toggleFavourite={ toggleFavourite } favourite={ favourite } setDisplayModal={ props.setDisplayModal } setSelectedPhoto={ props.setSelectedPhoto } selectedPhoto={ props.selectedPhoto } showModal={ props.showModal } />
    </div>
  );
};


export default HomeRoute;
