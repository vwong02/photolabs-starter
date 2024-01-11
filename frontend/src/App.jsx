import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={ topics } photos={ photos } />
    </div>
  );
};

export default App;
