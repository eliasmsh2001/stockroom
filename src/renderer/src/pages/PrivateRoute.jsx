import React, { useEffect } from 'react'
import { Navigate, redirect } from 'react-router'

const PrivateRoute = ({ children }) => {
  const [user, setUser] = React.useState(false)

  useEffect(() => {
    const tocken
  })

  if (!user) {
    return <Navigate to="/auth" />
  }

  return children
}

export default PrivateRoute
