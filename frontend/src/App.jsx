import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {

  const [ displayModal, setDisplayModal ] = useState(false)
  const [ selectedPhotos, setSelectedPhotos ] = useState(null)

  const showModal = (photo) => {
    setSelectedPhotos(photo);
    setDisplayModal(true);
  }

  return (
    <div className="App">
      <HomeRoute topics={ topics } photos={ photos } showModal={ showModal } />
      { displayModal && <PhotoDetailsModal selectedPhotos={ selectedPhotos } setDisplayModal={ setDisplayModal } /> }
    </div>
  );
};

export default App;
