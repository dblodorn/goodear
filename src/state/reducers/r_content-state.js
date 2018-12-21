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


const pageCount = (state = 0, action) => {
  switch (action.type) {
    case 'PAGE_COUNT':
      return action.count
    default:
      return state
  }
}

export {
  pageState,
  setVideoState,
  pageCount
}