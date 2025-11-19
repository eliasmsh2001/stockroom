import { useQuery } from '@tanstack/react-query'
import { getItemsHighlights } from '../util/apis/itemsApi'
import clsx from 'clsx'

const HomePage = () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.existingUser?.id

  const { data } = useQuery({
    queryKey: ['highlights', userId],
    queryFn: () => getItemsHighlights(userId),
    refetchOnWindowFocus: true
  })

  return (
    <section className="size-full p-8 flex gap-8">
      <div className="w-1/2 h-full ">
        <h1 className="text-xl font-bold text-mainBlue text-center mb-8">
          EXPIRING/EXPIRED ITEMS LIST
        </h1>
        <table className="w-full">
          <thead>
            <tr className="bg-mainBlue text-white font-bold ">
              <th className="min-w-10 border-r-2">NO.</th>
              <th className="min-w-96 border-r-2">GENERIC NAME</th>
              <th className="min-w-32 border-r-2">QUANTITY</th>
              <th className="min-w-44 ">EXPIRE DATE</th>
            </tr>
          </thead>
          <tbody>
            {data?.expiryItems?.map((item, index) => (
              <tr
                key={item?.id}
                className={clsx(
                  'text-mainText font-semibold py-2 h-8 border-b-2 border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                  {
                    'bg-stone-700 text-white': new Date(item.expireDate) <= new Date(),
                    'bg-alert/55':
                      new Date(item.expireDate) > new Date() &&
                      new Date(item.expireDate) <= new Date().setDate(new Date().getDate() + 30),
                    'bg-yellow-200':
                      new Date(item.expireDate) >= new Date() &&
                      new Date(item.expireDate) > new Date().setDate(new Date().getDate() + 30) &&
                      new Date(item.expireDate) <= new Date().setDate(new Date().getDate() + 60)
                  }
                )}
              >
                <td>{index + 1}</td>
                <td>{item?.genericName}</td>
                <td>{item?.quantity + '  ' + item?.unit}</td>
                <td>{item?.expireDate} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/2 h-1/2 ">
        <h1 className="text-xl font-bold text-mainBlue text-center mb-8">
          RAN OUT/RUNING OUT ITEMS LIST
        </h1>
        <table className="w-full">
          <thead>
            <tr className="bg-mainBlue text-white font-bold ">
              <th className="min-w-10 border-r-2">NO.</th>
              <th className="min-w-96 border-r-2">GENERIC NAME</th>
              <th className="min-w-32 border-r-2">QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {data?.runningOutItems?.map((item, index) => (
              <tr
                key={item?.id}
                className={clsx(
                  'text-mainText font-semibold py-2 h-8 border-b-2 border-mainBlue hover:bg-mainText/15 duration-200 cursor-pointer',
                  {
                    'bg-alert/55': item?.quantity <= 1,
                    'bg-yellow-200': item?.quantity <= 5 && item?.quantity > 1
                  }
                )}
              >
                <td>{index + 1}</td>
                <td>{item?.genericName}</td>
                <td>{item?.quantity ? item?.quantity + '  ' + item?.unit : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default HomePage
