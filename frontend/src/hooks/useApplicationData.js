import { useReducer, useEffect } from "react"

// Declare initial states
const initialState = {
  favourites: [],
  selectedPhoto: null,
  selectedTopic: 0,
  displayModal: false,
  photoData: [],
  topicData: [],
}

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO: "SELECT_PHOTO",
  SET_TOPIC: "SET_TOPIC",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BT_TOPICS",
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [ ...state.favourites, action.payload ] }

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.payload),
      }

    case ACTIONS.SET_PHOTO:
      return { ...state, selectedPhoto: action.payload }

    case ACTIONS.SET_TOPIC:
      return { ...state, selectedTopic: action.payload }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: action.payload }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload }

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${ action.type }`
      )
  }
}

const useApplicationData = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = (photoId) => {
    if (!state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId })
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })
    }
  }

  const setPhotoSelected = (selectedPhoto) => {
    dispatch({ type: ACTIONS.SET_PHOTO, payload: selectedPhoto })
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: null })
  }

  const toggleSelectedTopic = (selectedTopic) => {
    dispatch({ type: ACTIONS.SET_TOPIC, payload: selectedTopic })
  }

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => console.error("Error:", error))
  }, [])

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${ state.selectedTopic }`)
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
        )
        .catch((error) => console.error("Error:", error))
    } else {
      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        )
        .catch((error) => console.error("Error:", error))
    }
  }, [ state.selectedTopic ])

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleSelectedTopic,
  }
}

export default useApplicationData
