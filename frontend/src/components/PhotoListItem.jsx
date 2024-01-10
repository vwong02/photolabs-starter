import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  return (
    <div className="PhotoListItem" key={ props.sampleDataForPhotoListItem.id }>
      <img src={ props.sampleDataForPhotoListItem.imageSource } />
      <img src={ props.sampleDataForPhotoListItem.profile } />
      <p className="username">{ props.sampleDataForPhotoListItem.username }</p>
      <p>{ props.sampleDataForPhotoListItem.location.city } { props.sampleDataForPhotoListItem.location.country }</p>
    </div>
  )
};

export default PhotoListItem;
