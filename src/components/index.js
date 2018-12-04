// Higher Order Co./utils/Headts
import withStore from './HOC/withStore'
import pageData from './HOC/pageData'

// Layout Components
import Header from './header/Header'
import Logo from './Logo'

// Utility Components
import FitImage from './utils/FitImage'
import PopupGrid from './PopupGrid'
import PlayButton from './utils/PlayButton'
import Close from './utils/Close'
import BackClose from './utils/BackClose'
import Head from './utils/Head'

// Modals
import VideoModal from './modals/VideoModal'

// Plugin Compnents - most have external dependencies
//import MailScrape from './plugins/MailScrape'
import VideoGrid from './VideoGrid'

export {
  withStore,
  pageData,
  FitImage,
  Header,
  VideoModal,
  PlayButton,
  Close,
  Head,
  Logo,
  VideoGrid,
}