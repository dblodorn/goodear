import fetchWpDataController from './../../controllers/fetchWpDataController'
import { parseTaxonomies } from './../../scripts'
import { heights, spacing, fonts, colors, shared, breakpoints } from './../../styles/theme.json'
import { setHeaderState, setFooterState } from './a_window_data'

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

export default () => {
  return (dispatch) => {
    const _dataHandler = (payload) => {
      const taxonomies = {
        categories: parseTaxonomies(payload.posts.project, 'taxonomies', 'category'),
        capabilities: parseTaxonomies(payload.posts.project, 'taxonomies', 'capabilities'),
        clients: parseTaxonomies(payload.posts.project, 'taxonomies', 'client'),
        industries: parseTaxonomies(payload.posts.project, 'taxonomies', 'industry')
      }
      dispatch(taxonomyData(taxonomies))
      dispatch(apiData(payload))
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}
