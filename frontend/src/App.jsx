import React, { useState } from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";


const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData()

  return (
    <div className="App">

      <HomeRoute topics={ topics } photos={ photos } showModal={ onPhotoSelect } toggleFavourites={ updateToFavPhotoIds } favourites={ state.favourites } />

      { state.displayModal && <PhotoDetailsModal selectedPhoto={ setPhotoSelected } setDisplayModal={ onClosePhotoDetailsModal } showModal={ onPhotoSelect } toggleFavourites={ updateToFavPhotoIds } favourites={ state.favourites } /> }

    </div>
  );
};

export default App;
