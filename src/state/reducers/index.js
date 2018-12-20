import { combineReducers } from 'redux'
import { apiData, taxonomyData, videoListData } from './apiData'
import { 
  resizeState, 
  menuState, 
  fontState, 
  touchState, 
  modalState,
  headerState,
  footerState
} from './r_window_data'

import { 
  pageState,
  setVideoState
} from './r_content-state'

const rootReducer = combineReducers({
  api_data: apiData,
  videos: videoListData,
  categories: taxonomyData,
  resize_state: resizeState,
  fonts_loaded: fontState,
  touch_state: touchState,
  modal: modalState,
  menu: menuState,
  header_state: headerState,
  footer_state: footerState,
  page: pageState,
  current_video: setVideoState
})

export default rootReducer
