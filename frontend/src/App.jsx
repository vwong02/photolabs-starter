import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";


const App = () => {

  const {
    state,
    showModal,
    toggleFavourites,
    isFavPhotoExist
  } = useApplicationData()

  return (
    <div className="App">
      <HomeRoute topics={ topics } photos={ photos } isFavPhotoExist={ isFavPhotoExist } />
      { displayModal && <PhotoDetailsModal selectedPhotos={ state.selectedPhotos } setDisplayModal={ setDisplayModal } showModal={ showModal } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } favourites={ state.favourites } /> }
    </div>
  );
};

export default App;
