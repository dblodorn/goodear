const setPage = (slug) => {
  return {
    type: 'SET_PAGE',
    slug
  }
}

const setVideoPlaying = (data) => {
  return {
    type: 'VIDEO_PLAYING',
    data
  }
}

export {
  setPage,
  setVideoPlaying
}
