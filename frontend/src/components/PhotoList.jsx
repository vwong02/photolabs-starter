import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleFavourites, selectedPhoto, setPhotoSelected, favourites }) => {

  return (
    <ul className='photo-list'>

      { photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourites={ toggleFavourites } selectedPhoto={ selectedPhoto } setPhotoSelected={ setPhotoSelected } favourites={ favourites } />
        )
      }) }

    </ul>
  );
};

export default PhotoList;
