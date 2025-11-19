import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import ErrorIcon from '@mui/icons-material/Error'
import NewReciptItemInfo from '../newReceiptComponents/NewReciptItemInfo'
import { useRef, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addNewItemToStock } from '../../util/apis/itemsApi'
import { getReceiptCart } from '../../util/apis/receiptCartApis'
import { queryClient } from '../../util/apis/httpUrl'

export default function AddItemDialogue() {
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id
  const open = useSelector((state) => state.dialog.dialog)
  const errorMessage = useSelector((state) => state.dialog.errorMessage)
  const formRef = useRef()
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(dialogActions.handleCloseError())
  }

  const [unitSelection, setUnitSelection] = useState('')
  const [categorySelection, setCategorySelection] = useState('')
  const [selectedGenericNameValue, setSelectedGenericNameValue] = useState('')

  const {
    data: receiptData,
    isPending: receiptDataIsPending,
    isError: receiptDataIsError,
    error: receiptDataError
  } = useQuery({
    queryKey: ['receiptCart'],
    queryFn: getReceiptCart
  })

  const { mutate } = useMutation({
    mutationFn: addNewItemToStock,
    onError: (error) => {
      dispatch(dialogActions.handleShowError(error.message))
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receiptCart'] })
      queryClient.invalidateQueries({ queryKey: ['items'] })
      dispatch(dialogActions.hadleOpenDialog('newItemSuccess'))
      formRef.current.reset()
      setUnitSelection('')
      setCategorySelection('')
      setSelectedGenericNameValue('')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    mutate({ userId, data })
  }

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '460px!important',
            minHeight: '520px!important'
          }
        }}
        open={open === 'addItem'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'ADD ITEM'}</DialogTitle>

        <DialogContent>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <NewReciptItemInfo
              itemParents={receiptData?.itemParents}
              setSelectedGenericNameValue={setSelectedGenericNameValue}
              selectedGenericNameValue={selectedGenericNameValue}
              unitSelection={unitSelection}
              setUnitSelection={setUnitSelection}
              categorySelection={categorySelection}
              setCategorySelection={setCategorySelection}
            />

            <button
              type="submit"
              className="bg-mainBlue text-white font-bold text-lg py-2 rounded-md hover:opacity-45 duration-200 my-4"
            >
              SUBMIT
            </button>
          </form>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-alert text-white font-bold p-2 rounded-md hover:opacity-45 duration-200"
            onClick={handleClose}
          >
            CANCEL
          </button>
        </DialogActions>
      </Dialog>
    </>
  )
}
