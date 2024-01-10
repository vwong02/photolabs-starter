import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  const { id, imageSource, profile, username, location } = props.sampleDataForPhotoListItem

  return (
    <div className="PhotoListItem" key={ id }>
      <img src={ imageSource } />
      <img src={ profile } />
      <p className="username">{ username }</p>
      <p>{ location.city } { location.country }</p>
    </div>
  )
};

export default PhotoListItem;
