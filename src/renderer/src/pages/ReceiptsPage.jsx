import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { getAllReceipts } from '../util/apis/receiptApis'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../util/slicers/dialogSlicer'
import { useState } from 'react'

const ReceiptPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [day, setDay] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data: receipts } = useQuery({
    queryKey: ['receipts', searchTerm, year, month, day],
    queryFn: () => getAllReceipts({ searchTerm, year, month, day })
  })

  return (
    <section className="h-full flex justify-start py-6 items-center flex-col gap-4 overflow-y-scroll">
      <h1 className="text-mainBlue font-bold text-3xl mb-8">RECEIPTS</h1>

      <div className="flex justify-evenly w-[50rem]">
        <div className="flex flex-col text-xs">
          <label className="text-mainText font-bold">SEARCH BY ID, PROVIDER, OR ITEM</label>
          <input
            placeholder="search..."
            className="p-2 border-2 border-stone-400 w-96 rounded-md outline-0 focus:border-mainBlue h-10 text-lg text-mainText"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col text-xs">
            <label className="text-mainText font-bold">YEAR</label>
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="text"
              className="p-2 border-2 border-stone-400 w-20 rounded-md outline-0 focus:border-mainBlue h-10 text-lg text-mainText"
            />
          </div>
          <div className="flex flex-col text-xs">
            <label className="text-mainText font-bold">MONTH</label>
            <input
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              type="text"
              className="p-2 border-2 border-stone-400 w-14 rounded-md outline-0 focus:border-mainBlue h-10 text-lg text-mainText"
            />
          </div>
          <div className="flex flex-col text-xs">
            <label className="text-mainText font-bold">DAY</label>
            <input
              value={day}
              onChange={(e) => setDay(e.target.value)}
              type="text"
              className="p-2 border-2 border-stone-400 w-14 rounded-md outline-0 focus:border-mainBlue h-10 text-lg text-mainText"
            />
          </div>
        </div>
        <button
          onClick={() => navigate('/newReceipt')}
          className="bg-unique py-2 px-6 rounded-lg text-white font-bold"
        >
          NEW RECEIPT
        </button>
      </div>
      <table className="">
        <thead>
          <tr className="bg-mainBlue text-white font-bold ">
            <th className="min-w-28 border-r-2">RECEIPT ID</th>
            <th className="min-w-96 border-r-2">PROVIDER</th>
            <th className="min-w-32 border-r-2">DATE</th>
            <th className="min-w-32">TOTAL ITEMS</th>
          </tr>
        </thead>
        <tbody>
          {receipts?.map((item, index) => (
            <tr
              onClick={() => dispatch(dialogActions.handleViewReceiptDetails(item))}
              key={item?.id}
              className={clsx(
                'text-mainText font-semibold py-2 h-8 border-b-2 border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                {
                  'bg-mainBlue/10': index % 2 === 0
                }
              )}
            >
              <td>{item?.id}</td>
              <td>{item?.providorName}</td>
              <td>{item?.date}</td>
              <td>{item?.items?.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ReceiptPage
