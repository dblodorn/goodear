const apiData = (state = false, action) => {
  switch (action.type) {
    case 'API_DATA':
      return action.payload
    default:
      return state
  }
}

const taxonomyData = (state = false, action) => {
  switch (action.type) {
    case 'TAXONOMY_DATA':
      return action.payload
    default:
      return state
  }
}

const videoListData = (state = false, action) => {
  switch (action.type) {
    case 'VIDEO_LIST':
      return action.payload
    default:
      return state
  }
}

export {
  apiData,
  taxonomyData,
  videoListData
}
