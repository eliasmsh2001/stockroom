import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getExpensesReport } from '../util/apis/reportsApi'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import clsx from 'clsx'
import PrintableExpensesReport from '../components/printableComponents/PrintableExpensesReport'
import { useReactToPrint } from 'react-to-print'

const ReportsPage = () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id
  const [startingDate, setStartingDate] = useState('')
  const [endingDate, setEndingDate] = useState('')
  const [itemName, setitemName] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [categorySelection, setCategorySelection] = useState('')
  const categoryNames = ['قرطاسية', 'مستلزمات', 'مشغلات', 'أدوية']

  const contentRef = React.useRef(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: `@page {
            size: A4;
            margin: 0;
          }`
  })

  const {
    data: expensesData,
    isError,
    error
  } = useQuery({
    queryKey: [
      'report',
      userId,
      startingDate,
      endingDate,
      categorySelection,
      itemName,
      selectedDepartment
    ],
    queryFn: () =>
      getExpensesReport({
        userId,
        startingDate,
        endingDate,
        category: categorySelection,
        itemName,
        selectedDepartment
      }),
    refetchOnWindowFocus: true
  })

  return (
    <section className="flex flex-col gap-4 py-3 justify-start items-center">
      <div className="flex gap-4 justify-center">
        <div className="flex flex-col ">
          <label htmlFor="" className="text-xs font-bold text-mainText">
            starting date
          </label>
          <input
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
            className="border-2 border-stone-500 text-mainText rounded-md outline-0 focus:border-mainBlue"
            type="date"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="text-xs font-bold text-mainText">
            ending date
          </label>
          <input
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
            className="border-2 border-stone-500 text-mainText rounded-md outline-0 focus:border-mainBlue"
            type="date"
          />
        </div>

        <div
          className={clsx('flex gap-4', {
            'opacity-45 pointer-events-none': startingDate == ''
          })}
        >
          <Autocomplete
            disablePortal
            autoSelect={false}
            value={selectedDepartment}
            options={expensesData?.departments ? expensesData?.departments : []}
            onChange={(event, newValue) => {
              setSelectedDepartment(newValue)
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value)
                }}
              />
            )}
          />

          {/* <Autocomplete
            disablePortal
            autoSelect={false}
            value={itemName}
            options={expensesData?.itemNames}
            onChange={(event, newValue) => {
              setitemName(newValue)
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e) => {
                  setitemName(e.target.value)
                }}
              />
            )}
          /> */}

          <div className="flex flex-col text-mainText font-bold text-sm">
            <label>Category</label>
            <select
              className="w-44 border-2 border-stone-400 p-2 rounded-md"
              required
              value={categorySelection}
              name="category"
              onChange={(e) => setCategorySelection(e.target.value)}
            >
              <option value="">Select a category</option>
              {categoryNames.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {isError && <h1 className="text-center text-xl font-bold text-alert">{error.message}</h1>}

      {!isError && expensesData && (
        <>
          <button
            onClick={reactToPrintFn}
            className="bg-unique p-2 w-32 rounded-md text-white font-bold text-lg"
          >
            PRINT
          </button>
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
              {expensesData?.withdrawedItems?.map((item, index) => (
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
        </>
      )}

      <div className="hidden">
        <PrintableExpensesReport
          items={expensesData?.withdrawedItems}
          userId={userId}
          contentRef={contentRef}
          startingDate={startingDate}
          endingDate={endingDate}
          category={categorySelection}
          department={selectedDepartment}
        />
      </div>
    </section>
  )
}

export default ReportsPage
