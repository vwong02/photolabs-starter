import { useState, useEffect } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {

  // const [ selectedPhotos, setSelectedPhotos ] = useState(null)
  // const [ displayModal, setDisplayModal ] = useState(false)
  // const [ favourites, setFavourites ] = useState([])

  const [ state, setState ] = useState({
    favourites: [],
    selectedPhotos: null,
    displayModal: false
    
  })

  const showModal = (photo) => {
    setSelectedPhotos(photo);
    setDisplayModal(true);
  }

  const toggleFavourites = (photoId) => {
    if (!favourites.includes(photoId)) {
      setFavourites((prevFavourites) => [ ...prevFavourites, photoId ])
    } else {
      setFavourites(favourites.filter((id) => id !== photoId));
    }
  }

  const isFavPhotoExist = favourites.length > 0;



  // const {
  //   state,
  //   onPhotoSelect,
  //   updateToFavPhotoIds,
  //   onLoadTopic,
  //   onClosePhotoDetailsModal,
  // } = useApplicationData();

  return {
    state,
    showModal,
    toggleFavourites,
    isFavPhotoExist
  }
}

export default useApplicationData;