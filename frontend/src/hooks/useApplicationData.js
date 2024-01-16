import { useReducer, useEffect } from "react";


// Declare initial states
const initialState = {
  favourites: [],
  selectedPhoto: null,
  displayModal: false,
  photoData: [],
  topicData: []
};

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

function reducer(state, action) {

  switch (action.type) {

    //updateToFavPhotoIds - Add photo to favourites
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [ ...state.favourites, action.payload ] };


    // updateToFavPhotoIds - Delete photo from favourites
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: state.favourites.filter((id) => id !== action.payload) };


    // setPhotoSelected - Set photo and open modal when clicked
    case ACTIONS.SET_PHOTO:
      // { ...prevState, selectedPhoto: photo, displayModal: true }
      return { ...state, selectedPhoto: action.payload }

    // onPhotoSelect - Show photo details when clicked
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: null };


    // setPhotoSelected - Set photo data when modal open
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };


    // Set topic data
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

      
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${ action.type }`);
  }
}



const useApplicationData = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (!state.favourites.includes(photoId)) {
      //setState((prevState) => ({ ...prevState, favourites: [ ...prevState.favourites, photoId ] }));
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    } else {
      // setState((prevState) => ({ ...prevState, favourites: prevState.favourites.filter((id) => id !== photoId) }));
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })
    }
  };

  const setPhotoSelected = (selectedPhoto) => {
    // setState(prevState => ({ ...prevState, selectedPhoto: photo, displayModal: true }));
    // dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
    dispatch({ type: ACTIONS.SET_PHOTO, payload: selectedPhoto });

  };

  const onClosePhotoDetailsModal = () => {
    // setState((prevState) => ({ ...prevState, selectedPhoto: null));
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);


  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  }
};

export default useApplicationData;