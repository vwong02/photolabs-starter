import React, { useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      { props.photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourite={ props.toggleFavourite } favourite={ props.favourite } setDisplayModal={ props.setDisplayModal } setSelectedPhoto={ props.setSelectedPhoto } selectedPhoto={ props.selectedPhoto } showModal={ props.showModal } />
        )
      }
      ) }
    </ul>
  );
};

export default PhotoList;
