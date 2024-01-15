import React, { useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavourites, showModal, favourites }) => {
  return (
    <ul className="photo-list">
      { photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourites={ toggleFavourites } showModal={ showModal } favourites={ favourites } />
        )
      }
      ) }
    </ul>
  );
};

export default PhotoList;
