import React, { useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavourites, favourites, setFavourites, showModal }) => {
  return (
    <ul className="photo-list">
      { photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourites={ toggleFavourites } favourites={ favourites } setFavourites={ setFavourites } showModal={ showModal } />
        )
      }
      ) }
    </ul>
  );
};

export default PhotoList;
