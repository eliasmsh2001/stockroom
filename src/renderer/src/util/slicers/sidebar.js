import { createSlice } from '@reduxjs/toolkit'

const sidebarSlicer = createSlice({
  name: 'sidebar',
  initialState: { isExtended: false },
  reducers: {
    onToggleSidebar(state, action) {
      state.isExtended = !state.isExtended
    }
  }
})

export default sidebarSlicer
export const sidebarActions = sidebarSlicer.actions
