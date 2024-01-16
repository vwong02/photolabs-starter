import React from 'react';
import FavBadge from 'components/FavBadge'
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({ topics, isFavPhotoExist, toggleSelectedTopic }) => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo' onClick={ () => toggleSelectedTopic(0) } >PhotoLabs</span>
      <TopicList topics={ topics } toggleSelectedTopic={ toggleSelectedTopic } />
      <FavBadge isFavPhotoExist={ isFavPhotoExist } />
    </div>
  )
}

export default TopNavigationBar;