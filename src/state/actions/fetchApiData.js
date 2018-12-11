import fetchWpDataController from './../../controllers/fetchWpDataController'
import { parseTaxonomies } from './../../scripts'

export function apiData(payload) {
  return {
    type: 'API_DATA',
    payload
  }
}

export function taxonomyData(payload) {
  return {
    type: 'TAXONOMY_DATA',
    payload
  }
}

export function videoList(payload) {
  return {
    type: 'VIDEO_LIST',
    payload
  }
}

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      dispatch(taxonomyData(parseTaxonomies(payload.posts.video, 'taxonomies', 'category')))
      dispatch(videoList(payload.posts.video))
      dispatch(apiData(payload))
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}
