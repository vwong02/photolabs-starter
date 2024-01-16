import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'


const PhotoDetailsModal = ({ selectedPhoto, toggleFavourites, favourites, onClosePhotoDetailsModal }) => {

  const { location, urls, user, id } = selectedPhoto

  return (
    <div className='photo-details-modal'>

      <button className='photo-details-modal__close-button' onClick={ onClosePhotoDetailsModal }>
        <img src={ closeSymbol } alt='close symbol' />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton favourites={ favourites } toggleFavourites={ toggleFavourites } photos={ Object.values(selectedPhoto.similar_photos) } photoId={ id } />
        <img className='photo-details-modal__image' src={ urls.full }></img>

        <div className='photo-details-modal__photographer-details' >
          <img className='photo-details-modal__photographer-profile' src={ user.profile }></img>

          <div className='photo-details-modal__photographer-info' >
            <span>{ user.name }</span>

            <div className='photo-details-modal__photographer-location'>
              { location.city }, { location.country }
            </div>

          </div>
        </div>

      </div>

      <h4 className='photo-details-modal__header'>Similar Photos </h4>
      <PhotoList photos={ Object.values(selectedPhoto.similar_photos) } toggleFavourites={ toggleFavourites } favourites={ favourites } />
    </div>

  );
};

export default PhotoDetailsModal;
