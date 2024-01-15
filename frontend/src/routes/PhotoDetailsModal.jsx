import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ selectedPhoto, toggleFavourites, favourites, onClosePhotoDetailsModal }) => {

  const { location, urls, user, similar_photos } = selectedPhoto

  const handleClick = () => {
    onClosePhotoDetailsModal()
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={ handleClick }>
        <img src={ closeSymbol } alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={ urls.regular }></img>
        <div className='photo-details-modal__photograp her-details' >
          <img className="photo-details-modal__photographer-profile" src={ user.profile }></img>
          <div className="photo-details-modal__photographer-info" >
            <span>{ user.name }</span>
            <div className="photo-details-modal__photographer-location">
              { location.city }, { location.country }
            </div>
          </div>
        </div>
        <span className='photo-details-modal__header' >Similar Photos</span>
        <PhotoList photos={ selectedPhoto } toggleFavourites={ toggleFavourites } favourites={ favourites } />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
