import clsx from 'clsx'
import logoImg from '../../assets/images.jpg'

const PrintableWithdrawal = ({ contentRef, item }) => {
  return (
    <section ref={contentRef} className="flex flex-col items-center w-full pt-6">
      <div className="flex justify-between w-full">
        <img className="size-32" src={logoImg} alt="" />
        <div>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex items-center gap-4 justify-center  bg-mainText rounded-md p-4 min-w-32 text-white text-lg font-bold  ">
              <h1>{item?.id}</h1>
              <h1>إذن صرف</h1>
              --
              <h1>{item?.stockId === 2 ? 'المخزن الفرعي' : 'المخزن الرئيسي'}</h1>
            </div>
            <div className="flex gap-2 justify-center items-center border-2 border-mainText rounded-md p-2 text-lg font-bold text-mainText">
              <h1>{item?.date}</h1> -<h1>{item?.departmentName}</h1>
            </div>
          </div>
        </div>
      </div>

      <table className="border-2 border-mainText mt-6">
        <thead className="bg-mainText text-white font-bold text-xs text-start">
          <tr>
            <th className="w-10 ">NO.</th>
            <th className="min-w-64  ">ITEM GENERIC NAME</th>
            <th className="w-28  ">CATEGORY</th>
            <th className="w-28  ">QUANTITY</th>

            <th className="w-28 border-r-2">UNIT</th>

            <th className="w-32 ">EXPIRY DATE</th>
          </tr>
        </thead>
        <tbody>
          {item &&
            item?.items?.map((item, index) => (
              <tr
                key={item.id}
                className={clsx('text-mainText text-xs font-bold border-b-2 border-mainText', {
                  'bg-slate-100': index % 2 === 0,
                  'bg-mainText/5': index % 2 !== 0
                })}
              >
                <th className="border-r-2 border-mainText">{index + 1}</th>
                <th className="border-r-2 border-mainText">{item?.genericName}</th>
                <th className="border-r-2 border-mainText">{item?.category}</th>
                <th className="border-r-2 border-mainText">{item?.quantity}</th>
                <th className="border-r-2 border-mainText">{item?.unit}</th>

                <th className=" ">{item?.expireDate ? item?.expireDate : 'NO DATE'}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}

export default PrintableWithdrawal
