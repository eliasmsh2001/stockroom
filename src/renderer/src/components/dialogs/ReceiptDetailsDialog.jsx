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
import { useReactToPrint } from 'react-to-print'
import PrintableReceipt from '../printableComponents/PrintableReceipt'

export default function ReceiptDetailsDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const receipt = useSelector((state) => state.dialog.receiptDetails)
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)

  const contentRef = React.useRef(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: `@page {
          size: A4;
          margin: 0;
        }`
  })

  const handleClose = () => {
    dispatch(dialogActions.handleCloseError())
    setIsDeleting(false)
    setIsEditing(false)
  }

  const { mutate: deleteThitReceipt } = useMutation({
    mutationFn: deleteReceipt,
    onSuccess: () => {
      dispatch(dialogActions.handleCloseError())
      queryClient.invalidateQueries({ queryKey: ['receipts'] })
      setIsDeleting(false)
    }
  })

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '1200px!important',
            minHeight: '720px!important'
          }
        }}
        open={open === 'receiptDetails'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'RECEIPT DETAILS'}</DialogTitle>

        <DialogContent>
          <section className="px-8 flex flex-col gap-4 items-start relative">
            <div className="hidden">
              <PrintableReceipt item={receipt} contentRef={contentRef} />
            </div>
            {!isDeleting && !isEditing && (
              <div className="absolute right-10 top-0 flex gap-4 ">
                <button
                  onClick={() => setIsDeleting(true)}
                  className="bg-alert rounded-full size-12 hover:scale-105 hover:opacity-55 duration-200"
                >
                  <DeleteIcon style={{ fill: 'white' }} />
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-mainBlue rounded-full size-12 hover:scale-105 hover:opacity-55 duration-200"
                >
                  <EditIcon style={{ fill: 'white' }} />
                </button>
                <button
                  onClick={reactToPrintFn}
                  className="bg-unique rounded-full size-12 hover:scale-105 hover:opacity-55 duration-200"
                >
                  <LocalPrintshopIcon style={{ fill: 'white' }} />
                </button>
              </div>
            )}
            {isDeleting && (
              <div className="absolute right-16 top-0 flex flex-col items-center">
                <h1 className="text-alert font-bold text-xl">Confirm Deleting!</h1>
                <h1 className="text-stone-700 font-bold text-sm">This Item cannot be returned!</h1>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => deleteThitReceipt(receipt?.id)}
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
                  <h1 className="bg-mainText p-2 font-bold text-white text-lg rounded-md">
                    ID: {receipt?.id}
                  </h1>
                  <div className="flex gap-4">
                    <h1 className="bg-mainText p-2 font-bold text-white text-lg rounded-md">
                      PROVIDER: {receipt?.providorName}
                    </h1>
                    <h1 className="bg-mainText p-2 font-bold text-white text-lg rounded-md">
                      DATE: {receipt?.date}
                    </h1>
                  </div>
                </div>
                <table className="border-2 border-mainText mt-6">
                  <thead className="bg-mainText text-white font-bold text-sm text-start">
                    <tr>
                      <td className="w-10 border-r-2 px-1">NO.</td>
                      <td className="min-w-96 border-r-2 px-1">ITEM GENERIC NAME</td>
                      <td className="w-28 border-r-2 px-1">CATEGORY</td>
                      <td className="w-28 border-r-2 px-1">QUANTITY</td>

                      <td className="w-28 border-r-2 px-1">UNIT</td>
                      <td className="w-52 border-r-2 px-1">UNIT INFO</td>

                      <td className="w-28 px-1">EXPIRE DATE</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {receipt &&
                      receipt?.items?.map((item, index) => (
                        <tr
                          key={item.id}
                          className={clsx(
                            'text-mainText text-sm font-bold h-8 border-b-2 border-mainText',
                            {
                              'bg-slate-100': index % 2 === 0,
                              'bg-mainText/20': index % 2 !== 0
                            }
                          )}
                        >
                          <td className="px-1 border-r-2 border-mainText">{index + 1}</td>
                          <td className="px-1 border-r-2 border-mainText">{item?.genericName}</td>
                          <td className="px-1 border-r-2 border-mainText">{item?.category}</td>
                          <td className="px-1 border-r-2 border-mainText">{item?.quantity}</td>
                          <td className="px-1 border-r-2 border-mainText">{item?.unit}</td>
                          <td className="px-1 border-r-2 border-mainText">{item?.unitInfo}</td>

                          <td className="px-1 ">
                            {item?.expireDate ? item?.expireDate : 'NO DATE'}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            )}

            {isEditing && <EditReciptForm receipt={receipt} setIsEditing={setIsEditing} />}
          </section>
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
