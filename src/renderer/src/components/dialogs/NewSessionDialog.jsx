import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import inputFeilds from './newSessionInputFields'
import SessionHoursSection from './newSessionComponents/SessionHoursSection'
import { sessionsActions } from '../../util/slicers/sessionsSlicer'
import { useMutation } from '@tanstack/react-query'
import { addNewSession } from '../../util/apis/sessionsAPIs'
import { useParams } from 'react-router'
import { queryClient } from '../../util/apis/httpUrl'

export default function NewSessionDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const sessionHours = useSelector((item) => item.sessions.sessionHours)

  const params = useParams()

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
    dispatch(sessionsActions.handleClearData())
  }

  const { mutate } = useMutation({
    mutationKey: ['newSession'],
    mutationFn: addNewSession,
    onSuccess: () => {
      queryClient.invalidateQueries(['sessions'])
      handleClose()
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    mutate({ data, sessionHours, patientId: params.id })
  }

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '1720px!important'
          }
        }}
        open={open === 'newSession'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'New Session'}</DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <section className="flex flex-wrap gap-4">
              {inputFeilds.map((item) => (
                <div key={item.key} className="flex flex-col">
                  <label htmlFor={item.name} className="text-sm font-bold text-mainText">
                    {item.label}
                  </label>
                  <input
                    placeholder={item.placeholder}
                    type={item.type}
                    name={item.name}
                    className={item.style}
                    onChange={() => null}
                  />
                </div>
              ))}
            </section>
            <section>
              <SessionHoursSection sessionHours={sessionHours} />
            </section>
            <div className="my-2 flex gap-4">
              <button className="bg-mainBlue text-sm text-white font-bold py-1 w-20">
                Confirm
              </button>
              <button
                onClick={() => handleClose()}
                type="button"
                className="bg-alert text-sm text-white font-bold py-1 w-20"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
