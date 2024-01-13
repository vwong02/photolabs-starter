import React, { useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavourites, setFavourites, showModal, favourites }) => {
  return (
    <ul className="photo-list">
      { photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourites={ toggleFavourites } setFavourites={ setFavourites } showModal={ showModal } favourites={ favourites } />
        )
      }
      ) }
    </ul>
  );
};

export default PhotoList;
