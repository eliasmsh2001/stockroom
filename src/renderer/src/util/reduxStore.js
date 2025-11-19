import { configureStore } from '@reduxjs/toolkit'
import MainSidebar from '../components/EssentialComponents/MainSidebar'
import sidebarSlicer from './slicers/sidebar.js'
import dialogSlicer from './slicers/dialogSlicer'
import sessionsSlicer from './slicers/sessionsSlicer.js'

const reduxStore = configureStore({
  reducer: {
    mainSidebar: sidebarSlicer.reducer,
    dialog: dialogSlicer.reducer,
    sessions: sessionsSlicer.reducer
  }
})

export default reduxStore
