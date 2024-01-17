import React from 'react'
import PhotoListItem from './PhotoListItem'
import '../styles/PhotoList.scss'

const PhotoList = ({ photos, toggleFavourites, setPhotoSelected, favourites, photoId }) => {

  return (
    <ul className='photo-list'>
      { photos.map((photo) => {
        return (
          <PhotoListItem key={ photo.id } photo={ photo } toggleFavourites={ toggleFavourites } setPhotoSelected={ setPhotoSelected } favourites={ favourites } photoId={ photoId } />
        )
      }) }
    </ul>
  )
}

export default PhotoList
