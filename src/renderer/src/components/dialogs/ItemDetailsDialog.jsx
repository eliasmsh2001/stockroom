import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import clsx from 'clsx'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'
import { useMutation } from '@tanstack/react-query'
import { deleteReceipt } from '../../util/apis/receiptApis'
import { queryClient } from '../../util/apis/httpUrl'
import EditReciptForm from '../EditReciptForm'
import EditItemForm from '../EditItemForm'
import { deleteItem } from '../../util/apis/itemsApi'

export default function ItemDetailsDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const itemDetails = useSelector((state) => state.dialog.itemDetails)
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)

  const handleClose = () => {
    dispatch(dialogActions.handleCloseError())
    setIsDeleting(false)
    setIsEditing(false)
  }

  const { mutate: deleteItemParent } = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      dispatch(dialogActions.handleCloseError())
      queryClient.invalidateQueries({ queryKey: ['items'] })
      setIsDeleting(false)
    }
  })

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '900px!important',
            minHeight: '520px!important'
          }
        }}
        open={open === 'itemDetails'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'RECEIPT DETAILS'}</DialogTitle>

        <DialogContent>
          <section className="flex flex-col gap-4 items-start relative">
            {!isDeleting && !isEditing && (
              <div className="absolute right-10 top-0 flex gap-4 ">
                {/* <button
                  onClick={() => setIsDeleting(true)}
                  className="bg-alert rounded-full size-12 hover:scale-105 hover:opacity-55 duration-200"
                >
                  <DeleteIcon style={{ fill: 'white' }} />
                </button> */}
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-mainBlue rounded-full size-12 hover:scale-105 hover:opacity-55 duration-200"
                >
                  <EditIcon style={{ fill: 'white' }} />
                </button>
              </div>
            )}
            {isDeleting && (
              <div className="absolute right-16 top-0 flex flex-col items-center">
                <h1 className="text-alert font-bold text-xl">Confirm Deleting!</h1>
                <h1 className="text-stone-700 font-bold text-sm">This Item cannot be returned!</h1>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => deleteItemParent(itemDetails?.id)}
                    className="border-2 p-2 border-alert rounded-md text-alert font-bold hover:bg-alert hover:text-white duration-200"
                  >
                    CONFIRM
                  </button>
                  <button
                    onClick={() => setIsDeleting(false)}
                    className="text-stone-400 font-bold p-2 hover:text-mainBlue duration-200"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            )}

            {!isEditing && (
              <>
                {' '}
                <div className="flex flex-col gap-2 items-start ">
                  <h1 className="bg-mainText p-2 my-4 font-bold text-white text-3xl rounded-md">
                    ITEM: {itemDetails?.genericName}
                  </h1>
                  <div className="flex gap-4">
                    <h1 className="  text-mainText font-bold  text-lg rounded-md">
                      CATEGORY: <span className="text-stone-600">{itemDetails?.category}</span>
                    </h1>
                    <h1 className="  text-mainText font-bold  text-lg rounded-md">
                      SOONEST EXPIRE DATE:{' '}
                      <span className="text-stone-600">{itemDetails?.soonestExpire}</span>
                    </h1>
                  </div>
                  <h1 className=" text-mainText font-bold text-lg rounded-md">
                    UNIT: <span className="text-stone-600">{itemDetails?.unit}</span>
                  </h1>
                </div>
                <h1 className="  text-mainText font-bold  text-lg rounded-md">
                  LAST RECEIVED:{' '}
                  <span className="text-stone-600">
                    {itemDetails?.latestReceive ? itemDetails?.latestReceive : 'UNKNOWN'}
                  </span>
                </h1>
                <h1 className="  text-mainText font-bold  text-lg rounded-md">
                  LAST WITHDRAWED:{' '}
                  <span className="text-stone-600">
                    {itemDetails?.latestWithdrawal
                      ? itemDetails?.latestWithdrawal
                      : 'Not Withdrawed yet'}
                  </span>
                </h1>
                <table className="border-2 border-mainText mt-6">
                  <thead className="bg-mainText text-white font-bold text-sm text-start">
                    <tr>
                      <th className="w-10 border-r-2 px-1">NO.</th>
                      <th className="min-w-52 border-r-2 px-1">ITEM GENERIC NAME</th>
                      <th className="w-20 border-r-2 px-1">QUANTITY</th>

                      <th className="w-20 border-r-2 px-1">UNIT</th>
                      <th className="w-28 border-r-2 px-1">EXPIRE DATE</th>

                      <th className="w-28 px-1">RECEIVE DATE</th>
                      <th className="w-52 px-1">PROVIDER</th>

                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {itemDetails?.items?.map((item, index) => (
                      <tr
                        key={item?.id}
                        className={clsx(
                          'text-mainText font-semibold py-2 h-8 border-b-2 text-center border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                          {
                            'bg-mainBlue/10': index % 2 === 0
                          }
                        )}
                      >
                        <td>{index + 1}</td>
                        <td>{item?.genericName}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.unit}</td>
                        <td>{item?.expireDate}</td>
                        <td>{item?.receiveDate}</td>
                        <td>{item?.providor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </section>

          {isEditing && <EditItemForm itemParent={itemDetails} setIsEditing={setIsEditing} />}
        </DialogContent>

        <DialogActions>
          <Button
            className="bg-alert text-white font-bold p-2 rounded-md hover:opacity-45 duration-200"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
