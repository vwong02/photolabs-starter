import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";


const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleSelectedTopic
  } = useApplicationData()


  return (
    <div className="App">

      <HomeRoute topics={ state.topicData } photos={ state.photoData } setPhotoSelected={ setPhotoSelected } toggleFavourites={ updateToFavPhotoIds } favourites={ state.favourites } toggleSelectedTopic={ toggleSelectedTopic } selectedPhoto={ state.selectedPhoto } />

      { state.selectedPhoto && <PhotoDetailsModal onClosePhotoDetailsModal={ onClosePhotoDetailsModal } toggleFavourites={ updateToFavPhotoIds } selectedPhoto={ state.selectedPhoto } favourites={ state.favourites } /> }

    </div>
  );
};

export default App;
