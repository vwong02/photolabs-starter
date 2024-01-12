import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {

  const [ photoModal, setModal ] = useState(false)

  return (
    <div className="App">
      <HomeRoute topics={ topics } photos={ photos } setModal={ setModal } />
      { photoModal && <PhotoDetailsModal /> }
    </div>
  );
};

export default App;
