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
    setState(prevState => ({ ...prevState, selectedPhotos: photo, displayModal: true }));
  }

  const toggleFavourites = (photoId) => {
    if (!state.favourites.includes(photoId)) {
      setState((prevState) => ({ ...prevState, favourites: [...prevState.favourites, photoId] }));
    } else {
      setState((prevState) => ({ ...prevState, favourites: prevState.favourites.filter((id) => id !== photoId) }));
    }
  };

  const isFavPhotoExist = state.favourites.length > 0;


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