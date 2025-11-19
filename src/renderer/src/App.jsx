import { HashRouter, Routes, Route, BrowserRouter, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RootLayout from './pages/RootLayout'
import { QueryClientProvider } from '@tanstack/react-query'
import SignupPage from './pages/SignupPage'
import UseAuthContext from './hooks/UseAuthContext'
import { Provider } from 'react-redux'
import reduxStore from './util/reduxStore'
import { queryClient } from './util/apis/httpUrl'
import NotFoundPage from './pages/NotFoundPage'
import ReceiptsPage from './pages/ReceiptsPage'
import NewReciptPage from './pages/receiptPageChildren/NewReciptPage'
import ItemsPage from './pages/ItemsPage'
import ExpensesPage from './pages/ExpensesPage'
import NewWithdrawalPage from './pages/expensesPageChildren/NewWithdrawalPage'
import EditWithdrawalPage from './pages/expensesPageChildren/EditWithdrawalPage'
import ReportsPage from './pages/ReportsPage'
// import './assets/main.css'

function App() {
  const { user } = UseAuthContext()
  // const user = true

  return (
    <>
      <Provider store={reduxStore}>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="/" element={user ? <RootLayout /> : <Navigate to="/login" />}>
                <Route path="signup" element={<SignupPage />} />
                <Route index element={user ? <HomePage /> : <Navigate to="/login" />} />
                <Route
                  path="receipts"
                  element={
                    user &&
                    (user?.existingUser?.username === 'admin' ||
                      user?.existingUser?.username === 'stock1') ? (
                      <ReceiptsPage />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route path="newReceipt" element={<NewReciptPage />} />
                <Route path="items" element={<ItemsPage />} />
                <Route path="expenses" element={<ExpensesPage />} />
                <Route path="newWithdrawal" element={<NewWithdrawalPage />} />
                <Route path="editWithdrawal" element={<EditWithdrawalPage />} />
                <Route path="reports" element={<ReportsPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </HashRouter>{' '}
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
