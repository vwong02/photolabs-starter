import { useState, useEffect } from "react";

const useApplicationData = () => {

  const [ state, setState ] = useState({
    favourites: [],
    selectedPhotos: null,
    displayModal: false
  })

  const onPhotoSelect = (photo) => {
    setState(prevState => ({ ...prevState, selectedPhotos: photo, displayModal: true }));
  }

  const updateToFavPhotoIds = (photoId) => {
    if (!state.favourites.includes(photoId)) {
      setState((prevState) => ({ ...prevState, favourites: [ ...prevState.favourites, photoId ] }));
    } else {
      setState((prevState) => ({ ...prevState, favourites: prevState.favourites.filter((id) => id !== photoId) }));
    }
  };

  const setPhotoSelected = (selectedPhoto) => {
    if (!selectedPhoto || !selectedPhoto.similar_photos) {
      return [];
    }
    return Object.values(selectedPhoto.similar_photos);
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
    }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  }
}

export default useApplicationData;