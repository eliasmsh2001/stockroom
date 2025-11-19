const handleClose = () => {}
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import ErrorIcon from '@mui/icons-material/Error'

export default function ErrorDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const errorMessage = useSelector((state) => state.dialog.errorMessage)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(dialogActions.handleCloseError())
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'error'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'ERROR'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Something went wrong!!
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">{errorMessage}</DialogContentText>
        </DialogContent>

        <ErrorIcon className="absolute right-5 top-5 scale-150" style={{ fill: 'red' }} />
        <DialogActions>
          <button
            className="bg-alert text-white font-bold p-2 rounded-md hover:opacity-45 duration-200"
            onClick={handleClose}
          >
            Go Back
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
