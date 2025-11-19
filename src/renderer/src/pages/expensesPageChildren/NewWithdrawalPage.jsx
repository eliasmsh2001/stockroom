import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import {
  clearWithdrawalCart,
  deleteWithdrawalCartItem,
  getWithdrawalCart,
  newWithdrawal,
  updateWithdrawalCart
} from '../../util/apis/expensesCartApi'
import CloseIcon from '@mui/icons-material/Close'
import { queryClient } from '../../util/apis/httpUrl'

const NewWithdrawalPage = () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id
  const [searchTerm, setSearchterm] = useState('')
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const state = 'new'
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [confirmCart, setConfirmCart] = useState(false)
  const [confirmTransport, setConfirmTransport] = useState(false)

  const { data: cartData } = useQuery({
    queryKey: ['withdrawalCart', userId, searchTerm, state],
    queryFn: () => getWithdrawalCart({ userId, searchTerm, state })
  })

  const { mutate: handleUpdateCart } = useMutation({
    mutationFn: updateWithdrawalCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['withdrawalCart'] })
    }
  })

  const handelDepartmentChange = (event, newValue) => {
    setSelectedDepartment(newValue)
    handleUpdateCart({ userId, case: 'department', data: newValue })
  }

  const { mutate: handleDeleteCartItem } = useMutation({
    mutationFn: deleteWithdrawalCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['withdrawalCart'] })
    }
  })

  const { mutate: clearCart } = useMutation({
    mutationFn: clearWithdrawalCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['withdrawalCart'] })
    }
  })

  const { mutate: sumbitCart } = useMutation({
    mutationFn: newWithdrawal,
    onSuccess: () => {
      clearCart({ id: cartData?.cart?.id })

      queryClient.invalidateQueries({ queryKey: ['withdrawals'] })

      dispatch(dialogActions.hadleOpenDialog('newWithdrawalSuccess'))
    },
    onError(error) {
      console.log(error.message)
      setError(error.message)
    }
  })

  return (
    <section className="flex gap-5 p-4 h-full">
      <div className="px-6 w-[40rem]">
        <div className="flex flex-col">
          <label className="text-xs font-bold text-mainText">SEARCH BY NAME</label>
          <input
            value={searchTerm}
            onChange={(e) => setSearchterm(e.target.value)}
            type="text"
            className="border-2 w-full p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
          />
        </div>{' '}
        <ul className="py-4 max-h-[50rem] overflow-y-scroll">
          {cartData &&
            Array.isArray(cartData?.items) &&
            cartData?.items.map((item, index) => (
              <li
                className={clsx(
                  'text-mainText text-xs font-semibold h-10 flex items-center border-b-2 border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                  {
                    'bg-mainBlue/10': index % 2 === 0
                  }
                )}
                key={item?.id}
              >
                <ul className="flex justify-between w-full max-w-[60rem]">
                  <li className="flex gap-2 ">
                    {' '}
                    <span>{item?.genericName}</span> |<span>Quantity: {item?.quantity}</span> |
                    <span>Unit: {item?.unit}</span> |<span>expire: {item?.expireDate}</span>
                  </li>
                  <li className="flex text-sm">
                    <button
                      className="bg-mainBlue h-full px-4 py-1 text-white hover:opacity-45 duration-200"
                      onClick={() =>
                        dispatch(
                          dialogActions.handleViewItemDetails(
                            cartData?.initialItemParents.find(
                              (subItem) => subItem?.genericName === item?.genericName
                            )
                          )
                        )
                      }
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => handleUpdateCart({ userId, case: 'newItem', data: item })}
                      className="bg-green-400 h-full px-4 py-1 text-white hover:opacity-45 duration-200"
                    >
                      ADD
                    </button>
                  </li>
                </ul>
              </li>
            ))}
        </ul>
      </div>

      <div className="w-[0.1rem] bg-mainText" />

      <div className="flex flex-col gap-4">
        {error && (
          <h1 className="text-center text-alert font-bold bg-alert/25 p-2 rounded-md">{error}</h1>
        )}
        <div className="flex justify-between">
          <div>
            <div className="flex flex-col ">
              <label className="text-xs font-bold text-mainText">DEPARTMENT</label>
              <Autocomplete
                disablePortal
                autoSelect={false}
                value={selectedDepartment}
                options={cartData?.departments}
                onChange={handelDepartmentChange}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value)
                      handleUpdateCart({ userId, case: 'department', data: e.target.value })
                    }}
                  />
                )}
              />
            </div>
            <div className="flex flex-col text-mainText font-bold text-sm">
              <label>Receipt Date</label>
              <input
                // name="date"
                type="date"
                onChange={(e) =>
                  handleUpdateCart({ userId, case: 'cartDate', data: e.target.value })
                }
                className="border-2 w-44 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
              />
            </div>
          </div>

          {!confirmCart && !confirmTransport && (
            <div className="flex flex-col gap-1 ">
              <button
                onClick={() => setConfirmCart(true)}
                className="bg-mainBlue p-8 rounded-md text-white font-bold text-xl hover:opacity-45 duration-200"
              >
                CONFIRM RECEIPT
              </button>
              {userId !== 2 && (
                <button
                  onClick={() => setConfirmTransport(true)}
                  className="bg-mainBlue p-2 rounded-md text-white font-bold hover:opacity-45 duration-200"
                >
                  TRANSPORT TO STOCK2
                </button>
              )}
              <button
                onClick={() => clearCart({ id: cartData?.cart?.id })}
                className="bg-alert p-2 rounded-md text-white font-bold hover:opacity-45 duration-200"
              >
                CLEAR CART
              </button>
            </div>
          )}

          {confirmCart && (
            <div className="pb-2">
              <div
                className="absolute  w-screen h-screen top-0 left-0 "
                onClick={() => setConfirmCart(false)}
              />
              <h1 className="text-mainText font-bold ">
                Are you sure you want to finish this operation?
              </h1>
              <div className="relative">
                <div className="absolute z-20 left-1/4 flex gap-8 top-2">
                  <button
                    className="bg-mainBlue text-white font-bold p-2 rounded-md"
                    onClick={() =>
                      sumbitCart({ cartId: cartData?.cart?.id, userId, transport: false })
                    }
                  >
                    CONFIRM
                  </button>
                  <button
                    className="bg-alert  text-white font-bold p-2 rounded-md"
                    onClick={() => {
                      setConfirmCart(false)
                      setError(null)
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          )}

          {confirmTransport && (
            <div className="pb-2">
              <div
                className="absolute  w-screen h-screen top-0 left-0 "
                onClick={() => setConfirmTransport(false)}
              />
              <h1 className="text-mainText font-bold text-center">
                Are you sure you want to transport these items to stock2?
              </h1>
              <div className="relative">
                <div className="absolute z-20 left-1/4 flex gap-8 top-2">
                  <button
                    className="bg-mainBlue text-white font-bold p-2 rounded-md"
                    onClick={() =>
                      sumbitCart({ cartId: cartData?.cart?.id, userId, transport: true })
                    }
                  >
                    CONFIRM
                  </button>
                  <button
                    className="bg-alert  text-white font-bold p-2 rounded-md"
                    onClick={() => {
                      setConfirmTransport(false)
                      setError(null)
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <table className="border-2 border-mainText">
          <thead className="bg-mainText text-white font-bold text-sm text-start">
            <tr>
              <td className="w-10 border-r-2 px-1">NO.</td>
              <td className="min-w-72 border-r-2 px-1">ITEM GENERIC NAME</td>
              <td className="w-24 border-r-2 px-1">QUANTITY</td>
              <td className="w-24 border-r-2 px-1">Max.Q</td>

              <td className="w-24 border-r-2 px-1">UNIT</td>

              <td className="w-28 px-1">EXPIRE DATE</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {cartData?.cart &&
              cartData?.cart?.items?.map((item, index) => (
                <tr
                  key={item.id}
                  className={clsx(
                    'text-mainText text-sm font-bold h-8 border-b-2 border-mainText',
                    {
                      'bg-alert/45': item?.maxQuantity < item?.quantity,
                      'bg-slate-100': index % 2 === 0 && !(item?.maxQuantity > item?.quantity),
                      'bg-mainText/20': index % 2 !== 0 && !(item?.maxQuantity > item?.quantity)
                    }
                  )}
                >
                  <td className="px-1 border-r-2 border-mainText">{index + 1}</td>
                  <td className="px-1 border-r-2 border-mainText">{item?.genericName}</td>
                  <td className="px-1 border-r-2 border-mainText">
                    <input
                      type="text"
                      placeholder="type..."
                      className="w-full outline-0 bg-transparent h-full text-mainText p-2  focus:outline-mainBlue"
                      onChange={(e) =>
                        handleUpdateCart({
                          userId,
                          case: 'editQuantity',
                          data: { itemId: item?.id, value: e.target.value }
                        })
                      }
                    />
                  </td>
                  <td className="px-1 border-r-2 border-mainText">{item?.maxQuantity}</td>

                  <td className="px-1 border-r-2 border-mainText">{item?.unit}</td>

                  <td className="px-1 ">{item?.expireDate ? item?.expireDate : 'NO DATE'}</td>
                  <td
                    onClick={() => handleDeleteCartItem(item?.id)}
                    className="bg-alert cursor-pointer hover:opacity-45 duration-200"
                  >
                    <CloseIcon style={{ fill: 'white' }} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default NewWithdrawalPage
