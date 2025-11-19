import { useState } from 'react'
import UseAuthContext from './UseAuthContext'
import url from '../util/apis/httpUrl'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = UseAuthContext()

  const signup = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${url}/api/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    const data = await response.json()
    if (!response.ok) {
      setError(data.error)
      setIsLoading(false)
    }
    if (response.ok) {
      //save the user into local storage
      localStorage.setItem('user', JSON.stringify(data))

      //Update the Auth Context
      dispatch({ type: 'LOGIN', payload: data })

      setIsLoading(false)
    }
  }
  return { signup, isLoading, error }
}
