import React, { useContext } from 'react'
import { AuthContext } from '../util/AuthContext'

const UseAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw Error('useAuthContext must be used inside a provider')
  }

  return context
}

export default UseAuthContext
