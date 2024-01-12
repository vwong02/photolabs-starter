import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {

  const [ displayModal, setDisplayModal ] = useState(false)

  const [ selectedPhoto, setSelectedPhoto ] = useState(null)

  const showModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
    console.log(photo)
  }

  return (
    <div className="App">
      <HomeRoute topics={ topics } photos={ photos } setDisplayModal={ setDisplayModal } showModal={ showModal } />
      { displayModal && <PhotoDetailsModal selectedPhoto={ selectedPhoto } setDisplayModal={ setDisplayModal } showModal={ showModal } /> }
    </div>
  );
};

export default App;
