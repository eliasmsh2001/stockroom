import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import ReceiptInfo from '../../components/newReceiptComponents/ReceiptInfo'
import NewReciptItemInfo from '../../components/newReceiptComponents/NewReciptItemInfo'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getReceiptCart,
  newReceipt,
  updateCart,
  deleteCartItem,
  clearCartData
} from '../../util/apis/receiptCartApis'
import { queryClient } from '../../util/apis/httpUrl'
import clsx from 'clsx'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'

const NewReciptPage = () => {
  const navigate = useNavigate()
  const [unitSelection, setUnitSelection] = useState('')
  const [categorySelection, setCategorySelection] = useState('')
  const formRef = useRef()
  const [selectedProvidorValue, setSelectedProvidorValue] = useState('')
  const [selectedGenericNameValue, setSelectedGenericNameValue] = useState('')
  const [confirmCart, setConfirmCart] = useState(false)
  const dispatch = useDispatch()

  const {
    data: receiptData,
    isPending: receiptDataIsPending,
    isError: receiptDataIsError,
    error: receiptDataError
  } = useQuery({
    queryKey: ['receiptCart'],
    queryFn: getReceiptCart
  })

  const { mutate: handleUpdateCart } = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receiptCart'] })
    }
  })

  const { mutate: handleDeleteCartItem } = useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receiptCart'] })
    }
  })

  const { mutate: handleClearCartData } = useMutation({
    mutationFn: clearCartData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receiptCart'] })
    }
  })

  const handleAddItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    handleUpdateCart({ case: 'newItem', data })
    formRef.current.reset()
    setUnitSelection('')
    setCategorySelection('')
    setSelectedGenericNameValue('')
  }

  const { mutate: sumbitNewReceipt } = useMutation({
    mutationFn: newReceipt,
    onError: (error) => {
      dispatch(dialogActions.handleShowError(error.message))
    },
    onSuccess: () => {
      dispatch(dialogActions.hadleOpenDialog('newReceiptSuccess'))
      formRef.current.reset()
      setUnitSelection('')
      setCategorySelection('')
      setSelectedGenericNameValue('')
      queryClient.invalidateQueries({ queryKey: ['receipts'] })
      handleClearCartData(receiptData?.cart?.id)
    }
  })

  return (
    <section className="flex items-start gap-8 px-6">
      {/* <button onClick={() => navigate('/receipts')}>back</button> */}
      <form ref={formRef} onSubmit={handleAddItem} className="flex flex-col gap-2 w-[30rem] ">
        {/* <h1 className="text-3xl text-mainBlue font-bold mb-4 w-full text-center">NEW RECEIPT</h1> */}
        <h1 className="text-mainBlue font-bold">INSERT RECEIPT DATA</h1>

        <ReceiptInfo
          selectedProvidorValue={selectedProvidorValue}
          setSelectedProvidorValue={setSelectedProvidorValue}
          providors={receiptData?.providors}
          handleUpdateCart={handleUpdateCart}
        />

        <h1 className="text-mainBlue font-bold">INSERT ITEM</h1>

        <NewReciptItemInfo
          itemParents={receiptData?.itemParents}
          setSelectedGenericNameValue={setSelectedGenericNameValue}
          selectedGenericNameValue={selectedGenericNameValue}
          unitSelection={unitSelection}
          setUnitSelection={setUnitSelection}
          categorySelection={categorySelection}
          setCategorySelection={setCategorySelection}
        />

        <br />

        <button className="text-lg font-bold text-white bg-mainBlue px-8 py-2 rounded-lg hover:opacity-45 duration-200">
          ADD ITEM
        </button>

        <button
          onClick={() => navigate('/receipts')}
          className="text-lg font-bold text-white bg-alert px-8 py-2 rounded-lg hover:opacity-45 duration-200"
          type="button"
        >
          CANCEL OPERATION
        </button>

        <button
          onClick={() => {
            handleClearCartData(receiptData?.cart?.id)
            setSelectedProvidorValue('')
          }}
          className="text-lg font-bold text-white bg-alert px-8 py-2 rounded-lg hover:opacity-45 duration-200"
          type="button"
        >
          RESET RECEIPT DATA
        </button>
      </form>

      <div className=" h-full w-full flex flex-col justify-start items-center gap-4">
        <div className="flex gap-2 items-center w-[50rem] justify-between">
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-1 bg-mainText text-white font-bold text-lg p-2 rounded-md">
              <h1 className="">PROVIDER --&gt; </h1>
              <h1>{receiptData?.cart?.providorName}</h1>
            </div>
            <div className="flex gap-1 bg-mainText text-white font-bold text-lg p-2 rounded-md">
              <h1 className="">RECEIPT DATE --&gt; </h1>
              <h1>{receiptData?.cart?.date}</h1>
            </div>
          </div>

          {!confirmCart && (
            <button
              onClick={() => setConfirmCart(true)}
              className="bg-mainBlue p-8 rounded-md text-white font-bold text-xl hover:opacity-45 duration-200"
            >
              CONFIRM RECEIPT
            </button>
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
                    onClick={() => sumbitNewReceipt(receiptData?.cart?.id)}
                  >
                    CONFIRM
                  </button>
                  <button
                    className="bg-alert  text-white font-bold p-2 rounded-md"
                    onClick={() => setConfirmCart(false)}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <table className="border-2 border-mainText">
          <thead className="bg-mainText text-white font-bold text-xs text-start">
            <tr>
              <td className="w-7 border-r-2 px-1">NO.</td>
              <td className="w-52 border-r-2 px-1">ITEM GENERIC NAME</td>
              <td className="w-24 border-r-2 px-1">CATEGORY</td>
              <td className="w-24 border-r-2 px-1">QUANTITY</td>

              <td className="w-20 border-r-2 px-1">UNIT</td>
              <td className="w-44 border-r-2 px-1">UNIT INFO</td>

              <td className="w-28 px-1">EXPIRE DATE</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {receiptData?.cart &&
              receiptData?.cart?.items?.map((item, index) => (
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

export default NewReciptPage
