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
import { editItem } from '../util/apis/itemsApi'

const EditItemForm = ({ itemParent, setIsEditing }) => {
  const dispatch = useDispatch()
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id

  const [itemCategory, setItemCategory] = useState(itemParent ? itemParent?.category : '')
  const [itemParentName, setItemParentName] = useState(itemParent ? itemParent?.genericName : '')
  const [itemParentUnit, setItemParentUnit] = useState(itemParent ? itemParent?.unit : '')

  const [error, setError] = useState()

  const [subItems, setSubItems] = useState(itemParent ? itemParent?.items : [])

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
    data,
    isPending: receiptDataIsPending,
    isError: receiptDataIsError,
    error: receiptDataError
  } = useQuery({
    queryKey: ['receiptCart'],
    queryFn: getReceiptCart
  })

  const editItemParent = (id, updatedData) => {
    setError(null)
    setSubItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    )
  }

  const editItemParentName = (updatedData) => {
    setError(null)
    setItemParentName(updatedData.genericName)
    setSubItems((prevItems) => prevItems.map((item) => ({ ...item, ...updatedData })))
  }

  const deleteSubItem = (idToRemove) => {
    setSubItems((prevItems) => prevItems.filter((item) => item.id !== idToRemove))
  }

  const { mutate } = useMutation({
    mutationFn: editItem,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
      queryClient.invalidateQueries({ queryKey: ['withdrawalCart'] })

      setIsEditing(false)
      dispatch(dialogActions.handleViewItemDetails(data))
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
            mutate({
              userId,
              itemParentId: itemParent?.id,
              itemParentName,
              itemParentUnit,
              itemCategory,
              subItems
            })
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
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-bold text-mainText">ITEM NAME</label>
            <Autocomplete
              disablePortal
              autoSelect={false}
              value={itemParentName}
              options={data?.itemParents}
              onChange={(event, newValue) => {
                editItemParentName({ genericName: newValue })
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
                    editItemParentName({ genericName: e.target.value })
                  }}
                  {...params}
                />
              )}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-mainText">ITEM CATEGORY</label>

            <select
              className=" border-2 border-stone-400 p-2 rounded-md"
              value={itemCategory}
              required
              onChange={(e) => {
                setItemCategory(e.target.value)
              }}
            >
              <option value="">Select Category</option>
              {categoryNames.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-mainText">ITEM UNIT INFO</label>
            <input
              type="text"
              className="border-2 w-96 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
              value={itemParentUnit}
              onChange={(e) => setItemParentUnit(e.target.value)}
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
            <td className="min-w-44 border-r-2 px-1">ITEM GENERIC NAME</td>
            <td className="w-28 border-r-2 px-1">QUANTITY</td>

            <td className="w-28 border-r-2 px-1">UNIT</td>

            <td className="w-28 px-1">EXPIRE DATE</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {itemParent &&
            subItems?.map((item, index) => (
              <tr
                key={item.id}
                className={clsx('text-mainText text-sm font-bold h-8 border-b-2 border-mainText', {
                  'bg-slate-100': index % 2 === 0,
                  'bg-mainText/20': index % 2 !== 0
                })}
              >
                <td className="px-1 border-r-2 border-mainText">{index + 1}</td>
                <td className="px-1 border-r-2 border-mainText">{item?.genericName}</td>
                <td className="px-1 border-r-2 border-mainText">
                  <input
                    className="size-full py-2 bg-transparent outline-0"
                    type="text"
                    value={item?.quantity}
                    onChange={(e) => editItemParent(item?.id, { quantity: e.target.value })}
                  />
                </td>
                <select
                  className=" border-2 border-stone-400 p-2 rounded-md"
                  value={item?.unit}
                  required
                  name="unit"
                  onChange={(e) => editItemParent(item?.id, { unit: e.target.value })}
                >
                  <option value="">Select a unit</option>
                  {unitsNames.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <td className="px-1 ">
                  <input
                    className=" p-2 border-2 border-stone-300 rounded-md focus:border-mainBlue text-mainText outline-0"
                    type="date"
                    value={item?.expireDate}
                    onChange={(e) => editItemParent(item?.id, { expireDate: e.target.value })}
                  />
                </td>
                <td
                  onClick={() => deleteSubItem(item?.id)}
                  className="bg-alert w-10 p-2 cursor-pointer hover:opacity-45 duration-200"
                >
                  <DeleteIcon style={{ fill: 'white' }} className="size-full" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default EditItemForm
