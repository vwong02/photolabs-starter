import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ selectedPhotos, setDisplayModal, showModal }) => {

  const { location, urls, user, similar_photos } = selectedPhotos

  const handleClick = () => {
    setDisplayModal(false)
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={ handleClick }>
        <img src={ closeSymbol } alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={ urls.regular }></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={ user.profile }></img>
          <div className="photo-list__user-info">
            <span>{ user.name }</span>
            <div className="photo-list__user-location">
              { location.city }, { location.country }
            </div>
          </div>
        </div>
        <PhotoList photos={ Object.values(similar_photos) } />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
