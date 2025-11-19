import { useState } from 'react'
import UseAuthContext from './UseAuthContext'
import { useNavigate } from 'react-router'
import url from '../util/apis/httpUrl'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = UseAuthContext()
  const navigate = useNavigate()

  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${url}/api/user/login`, {
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
      navigate('/')

      setIsLoading(false)
    }
  }
  return { login, isLoading, error }
}
