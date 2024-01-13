import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from 'components/FavBadge'
import TopicList from './TopicList';

const TopNavigationBar = ({ topics, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={ topics } />
      <FavBadge isFavPhotoExist={ isFavPhotoExist } />
    </div>
  )
}

export default TopNavigationBar;