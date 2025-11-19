import clsx from 'clsx'
import React from 'react'

const PrintableExpensesReport = ({
  userId,
  contentRef,
  startingDate,
  endingDate,
  department,
  category,
  items
}) => {
  return (
    <section dir="rtl" ref={contentRef} className="p-4 mt-8">
      <div className="flex flex-col gap-2 text-lg font-bold italic text-mainText">
        <h1>
          {' '}
          مصروفات {userId === 1 ? 'المخزن الرئيسي' : 'المخزن الفرعي'} {category && `- ${category}`}
        </h1>
        {department && <h1>القسم: {department}</h1>}
        <h1>
          من تاريخ {startingDate} الى {endingDate}{' '}
        </h1>
      </div>

      <div className="w-full flex justify-center items-center mt-8">
        <table className="">
          <thead>
            <tr className="bg-mainBlue text-white font-bold ">
              <th className="min-w-10 border-r-2">NO.</th>
              <th className="min-w-96 border-r-2">GENERIC NAME</th>
              <th className="min-w-28 border-r-2">T.QUANTITY</th>
              <th className="min-w-28">UNIT</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
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
    </section>
  )
}

export default PrintableExpensesReport
