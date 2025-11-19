import { createSlice } from '@reduxjs/toolkit'

const dialogSlicer = createSlice({
  name: 'dialog',
  initialState: {
    dialog: '',
    errorMessage: '',
    receiptDetails: {},
    itemDetails: {},
    withdrawalDetails: {}
  },
  reducers: {
    hadleOpenDialog(state, action) {
      state.dialog = action.payload
    },
    handleShowError(state, action) {
      state.dialog = 'error'
      state.errorMessage = action.payload
    },
    handleCloseError(state, action) {
      state.dialog = ''
      state.errorMessage = ''
    },
    handleViewReceiptDetails(state, action) {
      state.dialog = 'receiptDetails'
      state.receiptDetails = action.payload
    },
    handleCloseReceiptDetails(state, action) {
      state.dialog = ''
      state.receiptDetails = {}
    },
    handleViewWithdrawalDetails(state, action) {
      state.dialog = 'withdrawalDetails'
      state.withdrawalDetails = action.payload
    },
    handleCloseWithdrawalDetails(state, action) {
      state.dialog = ''
      state.withdrawalDetails = {}
    },
    handleViewItemDetails(state, action) {
      state.dialog = 'itemDetails'
      state.itemDetails = action.payload
    },
    handleCloseItemDetails(state, action) {
      state.dialog = ''
      state.itemDetails = {}
    }
  }
})

export default dialogSlicer
export const dialogActions = dialogSlicer.actions
