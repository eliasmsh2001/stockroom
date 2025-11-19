import React, { useState } from 'react'
import { useSignup } from '../hooks/UseSignup'

const SignupPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { signup, error, isLoading } = useSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>SIGN UP</h1>
      <label htmlFor="">username</label>
      <input type="text" name="" id="" onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="">password</label>
      <input type="text" name="" id="" onChange={(e) => setPassword(e.target.value)} />
      <button>Signup</button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default SignupPage
