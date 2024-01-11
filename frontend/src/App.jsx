import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar'; 

// Note: Rendering a single component to build components in isolation

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// const photos = new Array(3).fill(sampleDataForPhotoListItem);

const App = () => {
  return (
    <div className="App">
      {/* { photos.map((photo, index) =>
        <PhotoListItem key={ photo.id + index} photo={ photo } />
      ) } */}
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
