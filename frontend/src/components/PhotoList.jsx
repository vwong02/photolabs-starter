import React, { useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      { props.photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourite={ props.toggleFavourite } favourite={ props.favourite } setModal={ props.setModal } />
        )
      }
      ) }
    </ul>
  );
};

export default PhotoList;
