import clsx from 'clsx'
import React from 'react'

const PrintableItemsList = ({ contentRef, allItems, userId, categorySelection }) => {
  return (
    <div className="flex flex-col gap-10" ref={contentRef}>
      <h1 className="text-center font-bold text-lg text-mainText">
        قائمة {categorySelection != '' ? `ال${categorySelection}` : 'الأصناف'} الموجودة بالمخزن{' '}
        {userId === 1 ? 'الرئيسي' : 'الفرعي'}
      </h1>
      <table className="" ref={contentRef}>
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
    </div>
  )
}

export default PrintableItemsList
