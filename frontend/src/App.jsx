import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";

import photos from "mocks/photos";
import topics from "mocks/topics";


const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData()


  return (
    <div className="App">

      <HomeRoute topics={ topics } photos={ photos } setPhotoSelected={ setPhotoSelected } toggleFavourites={ updateToFavPhotoIds } favourites={ state.favourites } />

      { state.selectedPhoto && <PhotoDetailsModal onClosePhotoDetailsModal={ onClosePhotoDetailsModal } toggleFavourites={ updateToFavPhotoIds } selectedPhoto={ state.selectedPhoto } setPhotoSelected={ setPhotoSelected } favourites={ state.favourites } /> }

    </div>
  );
};

export default App;
