const pageState = (state =  null, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.slug
    default:
      return state
  }
}

const setVideoState = (state = null, action) => {
  switch (action.type) {
    case 'VIDEO_PLAYING':
      return action.data
    default:
      return state
  }
}

export {
  pageState,
  setVideoState
}