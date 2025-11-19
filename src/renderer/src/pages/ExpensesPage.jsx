import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { getAllReceipts } from '../util/apis/receiptApis'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../util/slicers/dialogSlicer'
import { useState } from 'react'
import { getAllWithdrawals } from '../util/apis/expensesAPI'

const ExpensesPage = () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id
  const [searchTerm, setSearchTerm] = useState('')
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [day, setDay] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data: receipts } = useQuery({
    queryKey: ['withdrawals', userId, searchTerm, year, month, day],
    queryFn: () => getAllWithdrawals({ userId, searchTerm, year, month, day })
  })
  return (
    <section className="h-full flex justify-start py-6 items-center flex-col overflow-y-scrol">
      <h1 className="text-mainBlue font-bold text-3xl mb-8">EXPENSES</h1>

      <div className="flex gap-4 ">
        <div>
          <div className="flex justify-evenly items-center w-[50rem]">
            <div className="flex flex-col text-xs">
              <label className="text-mainText font-bold">SEARCH BY ID, DEPARTMENT, OR ITEM</label>
              <input
                placeholder="search..."
                className="p-2 border-2 border-stone-400 w-64 rounded-md outline-0 focus:border-mainBlue h-10 text-lg text-mainText"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                type="text"
              />
            </div>

            <div className="flex gap-2 ">
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
              onClick={() => navigate('/newWithdrawal')}
              className="bg-unique py-2 px-6 rounded-lg text-white font-bold"
            >
              NEW WITHDRAWAL
            </button>
          </div>
          <div className="overflow-y-scroll mt-4 h-[30rem] flex justify-center items-start">
            <table className="">
              <thead>
                <tr className="bg-mainBlue text-white font-bold ">
                  <th className="min-w-28 border-r-2">RECEIPT ID</th>
                  <th className="min-w-80 border-r-2">DEPARTMENT NAME</th>
                  <th className="min-w-32 border-r-2">DATE</th>
                  <th className="min-w-32">TOTAL ITEMS</th>
                </tr>
              </thead>
              <tbody>
                {receipts?.finialFilteredItems?.map((item, index) => (
                  <tr
                    onClick={() => dispatch(dialogActions.handleViewWithdrawalDetails(item))}
                    key={item?.id}
                    className={clsx(
                      'text-mainText font-semibold py-2 h-8 border-b-2 border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                      {
                        'bg-mainBlue/10': index % 2 === 0
                      }
                    )}
                  >
                    <td>{item?.id}</td>
                    <td>{item?.departmentName}</td>
                    <td>{item?.date}</td>
                    <td>{item?.items?.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-y-scroll mt-4 h-[30rem]">
          <h1 className="text-mainBlue font-bold text-xl text-center">
            MOST WITHDRAWED ITEMS BASED ON YOUR SEARCH
          </h1>
          <table className="">
            <thead>
              <tr className="bg-mainBlue text-white font-bold ">
                <th className="min-w-10 border-r-2">NO.</th>
                <th className="min-w-64 border-r-2">GENERIC NAME</th>
                <th className="min-w-28 border-r-2">T.QUANTITY</th>
                <th className="min-w-28">UNIT</th>
              </tr>
            </thead>
            <tbody>
              {receipts?.groupedItems?.map((item, index) => (
                <tr
                  key={item?.id}
                  className={clsx(
                    'text-mainText font-semibold py-2 h-8 border-b-2 border-mainBlue hover:bg-mainText/15 duration-200 ',
                    {
                      'bg-mainBlue/10': index % 2 === 0
                    }
                  )}
                >
                  <th>{index + 1}</th>
                  <th>{item?.genericName}</th>
                  <th>{item?.quantity}</th>
                  <th>{item?.unit}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
export default ExpensesPage
