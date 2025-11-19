import clsx from 'clsx'
import Autocomplete from '@mui/material/Autocomplete'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getReceiptCart } from '../util/apis/receiptCartApis'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { editReceipt } from '../util/apis/receiptApis'
import { queryClient } from '../util/apis/httpUrl'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../util/slicers/dialogSlicer'

const EditReciptForm = ({ receipt, setIsEditing }) => {
  const dispatch = useDispatch()

  const [selectedProvidorValue, setSelectedProvidorValue] = useState(
    receipt ? receipt?.providorName : ''
  )
  const [receiptDate, setReceiptDate] = useState(receipt ? receipt?.date : '')
  const [error, setError] = useState()

  const [receiptItems, setReceiptItems] = useState(receipt ? receipt?.items : [])

  const unitsNames = [
    'piece',
    'carton',
    'bag',
    'roll',
    'pack',
    'box',
    'ampoule',
    'bottle',
    'gallon',
    'litter',
    'tab'
  ]

  const categoryNames = ['قرطاسية', 'مستلزمات', 'مشغلات', 'أدوية']

  const {
    data: receiptData,
    isPending: receiptDataIsPending,
    isError: receiptDataIsError,
    error: receiptDataError
  } = useQuery({
    queryKey: ['receiptCart'],
    queryFn: getReceiptCart
  })

  const editReceiptItems = (id, updatedData) => {
    setError(null)
    setReceiptItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    )
  }

  const handleProvidorChange = (event, newValue) => {
    setSelectedProvidorValue(newValue)
  }

  const addItemToReceipt = () => {
    setReceiptItems([
      ...receiptItems,
      {
        genericName: null,
        unit: null,
        unitInfo: null,
        category: null,
        quantity: null,
        expireDate: 'NO DATE'
      }
    ])
  }

  const deleteReceiptItem = (idToRemove) => {
    setReceiptItems((prevItems) => prevItems.filter((item) => item.id !== idToRemove))
  }

  const { mutate } = useMutation({
    mutationFn: editReceipt,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['receipts'] })
      setIsEditing(false)
      dispatch(dialogActions.handleViewReceiptDetails(data))
      setError(null)
    },
    onError: (error) => {
      setError(error.message)
    }
  })

  return (
    <>
      <div className="absolute right-10 flex gap-4">
        <button
          onClick={() =>
            mutate({ receiptId: receipt?.id, receiptItems, selectedProvidorValue, receiptDate })
          }
          className="size-16 bg-mainBlue rounded-full hover:opacity-45 duration-200"
        >
          <DoneIcon style={{ fill: 'white' }} />
        </button>
        <button
          className="size-16 bg-alert rounded-full hover:opacity-45 duration-200"
          onClick={() => setIsEditing(false)}
        >
          <CloseIcon style={{ fill: 'white' }} />
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start ">
        <h1 className="bg-mainText p-2 font-bold text-white text-lg rounded-md">
          ID: {receipt?.id}
        </h1>
        <div className="flex gap-4">
          <div>
            <label className="font-bold text-mainText">Providor</label>
            <Autocomplete
              disablePortal
              autoSelect={false}
              value={selectedProvidorValue}
              options={receiptData?.providors}
              onChange={handleProvidorChange}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => {
                    setSelectedProvidorValue(e.target.value)
                    handleUpdateCart({ case: 'providor', data: e.target.value })
                  }}
                />
              )}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-mainText ">Date</label>
            <input
              className="p-3 text-xl border-2 border-stone-300 rounded-md focus:border-mainBlue text-mainText outline-0"
              type="date"
              value={receiptDate}
              onChange={(e) => setReceiptDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <h1 className=" mt-6 text-center font-bold text-mainBlue w-full text-xl!">
        YOU CAN CLICK ON ANY CELL TO EDIT{' '}
      </h1>
      {error && <p className="text-alert w-full bg-alert/25 rounded-md p-2 text-center">{error}</p>}
      <table className="border-2 border-mainText">
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
            receiptItems.map((item, index) => (
              <tr
                key={item.id}
                className={clsx('text-mainText text-sm font-bold h-8 border-b-2 border-mainText', {
                  'bg-slate-100': index % 2 === 0,
                  'bg-mainText/20': index % 2 !== 0
                })}
              >
                <td className="px-1 border-r-2 border-mainText">{index + 1}</td>
                <td className="px-1 border-r-2 border-mainText">
                  {/* <input
                    className="size-full py-2 bg-transparent outline-0"
                    type="text"
                    value={item?.genericName}
                    onChange={(e) => editReceiptItems(item?.id, { genericName: e.target.value })}
                  /> */}

                  <Autocomplete
                    disablePortal
                    autoSelect={false}
                    value={item?.genericName}
                    options={receiptData?.itemParents}
                    onChange={(event, newValue) => {
                      editReceiptItems(item?.id, { genericName: newValue })
                    }}
                    sx={{ width: 300, height: 40 }}
                    renderInput={(params) => (
                      <TextField
                        sx={{
                          '& .MuiInputBase-root': {
                            height: 40 // Control input height
                          }
                        }}
                        required
                        name="genericName"
                        onChange={(e) => {
                          editReceiptItems(item?.id, { genericName: e.target.value })
                        }}
                        {...params}
                      />
                    )}
                  />
                </td>
                <td className="px-1 border-r-2 border-mainText">
                  <select
                    className=" border-2 border-stone-400 p-2 rounded-md"
                    value={item?.category}
                    required
                    name="unit"
                    onChange={(e) => {
                      editReceiptItems(item?.id, { category: e.target.value })
                    }}
                  >
                    <option value="">Select a unit</option>
                    {categoryNames.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-1 border-r-2 border-mainText">
                  <input
                    className="size-full py-2 bg-transparent outline-0"
                    type="text"
                    value={item?.quantity}
                    onChange={(e) => editReceiptItems(item?.id, { quantity: e.target.value })}
                  />
                </td>
                <td className="px-1 border-r-2 border-mainText">
                  <select
                    className=" border-2 border-stone-400 p-2 rounded-md"
                    value={item?.unit}
                    required
                    name="unit"
                    onChange={(e) => {
                      editReceiptItems(item?.id, { unit: e.target.value })
                    }}
                  >
                    <option value="">Select a unit</option>
                    {unitsNames.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-1 border-r-2 border-mainText">
                  <input
                    className="size-full py-2 bg-transparent outline-0"
                    type="text"
                    value={item?.unitInfo}
                    onChange={(e) => editReceiptItems(item?.id, { unitInfo: e.target.value })}
                  />
                </td>

                <td className="px-1 ">
                  <input
                    className=" p-2 border-2 border-stone-300 rounded-md focus:border-mainBlue text-mainText outline-0"
                    type="date"
                    value={item?.expireDate}
                    onChange={(e) => editReceiptItems(item?.id, { expireDate: e.target.value })}
                  />
                </td>
                <td
                  onClick={() => deleteReceiptItem(item?.id)}
                  className="bg-alert w-10 p-2 cursor-pointer hover:opacity-45 duration-200"
                >
                  <DeleteIcon style={{ fill: 'white' }} className="size-full" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button
        onClick={addItemToReceipt}
        className="bg-mainBlue p-2 text-white font-bold rounded-md hover:scale-110 hover:opacity-75 duration-200 flex justify-center items-center"
      >
        ADD ITEM
        <AddIcon style={{ fill: 'white' }} />
      </button>
    </>
  )
}

export default EditReciptForm
