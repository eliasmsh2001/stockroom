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
import { useNavigate } from 'react-router'
import DoneAllIcon from '@mui/icons-material/DoneAll'

export default function NewWithdrawalSuccess() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/expenses')
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'newWithdrawalSuccess'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'NEW RECEIPT SUCCESS'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            New Receipt Added Successfully!!
            <div className="flex justify-center items-center p-4 m-4">
              <span className="size-32 border-2 border-mainBlue rounded-full flex justify-center items-center">
                <DoneAllIcon className="" style={{ fill: 'blue' }} />
              </span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-mainBlue text-white font-bold text-lg p-2 rounded-md"
            onClick={handleClose}
          >
            PROCEED
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
