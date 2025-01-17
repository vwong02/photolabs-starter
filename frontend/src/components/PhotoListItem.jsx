import React from 'react';
import PhotoFavButton from './PhotoFavButton'
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, toggleFavourites, setPhotoSelected, favourites }) => {

  const { id, location, urls, user } = photo

  return (
    <div className='photo-list__item'>
      <PhotoFavButton toggleFavourites={ toggleFavourites } favourites={ favourites } photoId={ id } />
      <img className='photo-list__image' src={ urls.regular } onClick={ () => { setPhotoSelected(photo) } } />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={ user.profile } />
        <div className='photo-list__user-info' >
          <span>{ user.username }</span>
          <span className='photo-list__user-location' >{ location.city } { location.country }</span>
        </div>
      </div>
    </div>
  )
};


export default PhotoListItem;
