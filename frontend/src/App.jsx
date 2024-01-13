import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {

  const [ selectedPhotos, setSelectedPhotos ] = useState(null)

  const [ displayModal, setDisplayModal ] = useState(false)
  const showModal = (photo) => {
    setSelectedPhotos(photo);
    setDisplayModal(true);
  }

  const [ favourites, setFavourites ] = useState([])

  const toggleFavourites = (photoId) => {
    if (!favourites.includes(photoId)) {
      setFavourites((prevFavourites) => [ ...prevFavourites, photoId ])
      return favourites;
    } else {
      setFavourites(favourites.filter((id) => id !== photoId));
      return favourites;
    }
  }

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="App">
      <HomeRoute topics={ topics } photos={ photos } showModal={ showModal } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } favourites={ favourites } isFavPhotoExist={ isFavPhotoExist } />
      { displayModal && <PhotoDetailsModal selectedPhotos={ selectedPhotos } setDisplayModal={ setDisplayModal } showModal={ showModal } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } favourites={ favourites } /> }
    </div>
  );
};

export default App;
