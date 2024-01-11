import React, { useState } from 'react';


import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const [ heart, setHeart ] = useState([])

  // const toggleHeart = () => {
  //   setHeart((prevHeart) => [ ...prevHeart])
  // }

  const toggleHeart = (photoId) => {
    setHeart((prevHeart) => {
      const isHeart = prevHeart.includes(photoId)
      if (isHeart) {
        return prevHeart.filter((id) => id !== photoId)
      } else {
        return [...prevHeart, photoId]
      }
    })
  }


  return (
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } />
      <PhotoList photos={ props.photos } toggleHeart={ toggleHeart } heart={ heart } />
    </div>
  );
};

export default HomeRoute;
