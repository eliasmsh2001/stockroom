import { useQuery } from '@tanstack/react-query'
import { getItems } from '../util/apis/itemsApi'
import clsx from 'clsx'
import DialogActions from '@mui/material/DialogActions'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../util/slicers/dialogSlicer'
import { useState } from 'react'

const ItemsPage = () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id
  const dispatch = useDispatch()

  const categoryNames = ['قرطاسية', 'مستلزمات', 'مشغلات', 'أدوية']
  const [categorySelection, setCategorySelection] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const { data: allItems } = useQuery({
    queryKey: ['items', userId, searchTerm, categorySelection],
    queryFn: () => getItems(userId, searchTerm, categorySelection),
    refetchOnWindowFocus: 'always'
  })
  return (
    <section className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-mainBlue font-bold text-3xl mb-8">ALL ITEMS IN STOCK</h1>

      <div className="flex justify-between w-[95%] ">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <label htmlFor="" className="text-mainText font-bold text-xs">
              SEARCH BY NAME
            </label>
            <input
              placeholder="SEARCH..."
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 w-96 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-mainText font-bold text-xs">
              CATEGORY
            </label>
            <select
              className="w-44 border-2 border-stone-400 text-lg font-bold text-mainText p-2 rounded-md bg-transparent"
              required
              value={categorySelection}
              onChange={(e) => setCategorySelection(e.target.value)}
            >
              <option value="">ALL</option>
              {categoryNames.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={() => dispatch(dialogActions.hadleOpenDialog('addItem'))}
          className="py-4 px-10 text-white font-bold rounded-md bg-unique hover:opacity-45 hover:scale-110 duration-200"
        >
          ADD ITEM
        </button>
      </div>
      <table className="">
        <thead>
          <tr className="bg-mainBlue text-white font-bold text-sm">
            <th className="min-w-10 border-r-2">NO.</th>
            <th className="min-w-80 border-r-2">GENERIC NAME</th>
            <th className="min-w-32 border-r-2">CATEGORY</th>
            <th className="min-w-36 border-r-2">UNIT</th>

            <th className="min-w-48">QUANTITY</th>
            <th className="min-w-40">EXPIRE</th>

            <th className="min-w-40 border-r-2">LATEST RECEIVE</th>
            <th className="min-w-40 border-r-2">LATEST WITHDRAWAL</th>
          </tr>
        </thead>
        <tbody>
          {allItems &&
            Array.isArray(allItems) &&
            allItems?.map((item, index) => (
              <tr
                onClick={() => dispatch(dialogActions.handleViewItemDetails(item))}
                key={item?.id}
                className={clsx(
                  'text-mainText font-semibold h-6 border-b-2 text-xs border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                  {
                    'bg-mainBlue/10': index % 2 === 0
                  }
                )}
              >
                <th>{index + 1}</th>
                <th>{item?.genericName}</th>
                <th>{item?.category}</th>
                <th>{item?.unit}</th>

                <th>
                  {item?.quantity?.map((item, index) => (
                    <>
                      {index < 2 && (
                        <span key={index}>
                          {' '}
                          {index > 0 && '+'}
                          {item}
                          {index == 1 && (
                            <span className="text-xs font-bold text-mainBlue"> more..</span>
                          )}
                        </span>
                      )}
                    </>
                  ))}
                </th>
                <th>{item?.soonestExpire}</th>

                <th>{item?.latestReceive ? item?.latestReceive : 'UNKNOWN'}</th>
                <th>{item?.latestWithdrawal ? item?.latestWithdrawal : 'Not Withdrawed yet'}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}

export default ItemsPage
