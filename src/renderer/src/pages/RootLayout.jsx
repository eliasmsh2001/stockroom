import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import MainSidebar from '../components/EssentialComponents/MainSidebar'
import logoimg from '../assets/images.jpg'
import UseAuthContext from '../hooks/UseAuthContext'
import LogoutComfirmationDialog from '../components/dialogs/LogoutComfirmationDialog'
import CloseAppConfirmation from '../components/dialogs/CloseAppConfirmation'
import NewReceiptSuccessCart from '../components/dialogs/NewReceiptSuccessCart'
import ErrorDialog from '../components/dialogs/ErrorDialog'
import ReceiptDetailsDialog from '../components/dialogs/ReceiptDetailsDialog'
import ItemDetailsDialog from '../components/dialogs/ItemDetailsDialog'
import AddItemDialogue from '../components/dialogs/AddItemDialogue'
import AddNewItemSuccessDialog from '../components/dialogs/AddNewItemSuccessDialog'
import NewWithdrawalSuccess from '../components/dialogs/NewWithdrawalSuccess'
import WithdrawalDetailsDialog from '../components/dialogs/WithdrawalDetailsDialog'

const RootLayout = () => {
  const today = new Date().toUTCString().slice(0, 16)
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5))
  const [username, setUserName] = useState()

  const { user } = UseAuthContext()
  //

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 5))
    }, 1000)

    let currentUser = JSON.parse(localStorage.getItem('user'))?.existingUser?.username
    if (currentUser === 'stock1') {
      setUserName('المخزن الرئيسي')
    } else if (currentUser === 'stock2') {
      setUserName('المخزن الفرعي')
    } else {
      setUserName(currentUser)
    }

    // Cleanup the interval on component unmount

    return () => clearInterval(timerID)
  }, [time])

  return (
    <>
      <main className="relative flex  flex-row-reverse h-screen w-screen overflow-hidden">
        <MainSidebar />
        <section className=" flex flex-col gap-4 left-5 top-5 w-full">
          <div className="w-full flex gap-4 items-center justify-between px-8 py-4 border-b-2 border-black/25">
            <div className="flex items-center gap-4">
              <img src={logoimg} alt="" className=" size-32 " />
              <div className="flex flex-col gap-2 items-center  text-mainText font-bold text-lg">
                <h1>العيادة المجمعة زاوية الدهماني</h1>
                <h1>إدارة المخازن</h1>
              </div>
            </div>

            {username && (
              <div className="text-lg font-bold text-mainText py-10 flex items-center justify-center flex-col">
                {' '}
                <h1>WELCOME! </h1> <h1>{username} </h1>
              </div>
            )}

            <div className="text-lg font-bold text-mainText py-10 flex flex-row-reverse gap-4">
              <h1>{time}</h1>
              <h1>{today}</h1>
            </div>
          </div>
          <Outlet />
        </section>
      </main>
      <LogoutComfirmationDialog />
      <CloseAppConfirmation />
      <NewReceiptSuccessCart />
      <ErrorDialog />
      <ReceiptDetailsDialog />
      <ItemDetailsDialog />
      <AddItemDialogue />
      <AddNewItemSuccessDialog />
      <NewWithdrawalSuccess />
      <WithdrawalDetailsDialog />
    </>
  )
}

export default RootLayout
