import React, { useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavourites, selectedPhoto, setPhotoSelected, favourites }) => {
  return (
    <ul className="photo-list">
      { photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourites={ toggleFavourites } selectedPhoto={ selectedPhoto } setPhotoSelected={ setPhotoSelected } favourites={ favourites } />
        )
      }
      ) }
    </ul>
  );
};

export default PhotoList;
