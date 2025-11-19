import React from 'react'
import { useState } from 'react'
import { useLogin } from '../../hooks/UseLogin'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const textFieldStyle = `border-2 border-mainBlue/35 rounded-xl p-2 w-64 text-mainText outline-0 focus:border-mainBlue `

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      {error && <div className="text-alert text-center font-bold">{error}</div>}
      <div className="flex flex-col gap-1">
        <input
          className={textFieldStyle}
          type="text"
          name=""
          id=""
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col gap-1">
        <input
          className={textFieldStyle}
          type="password"
          name=""
          id=""
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-8">
        <button
          className={`border-2 border-mainBlue text-mainBlue py-1 
          rounded-full font-bold hover:bg-mainBlue hover:text-white 
          duration-200`}
        >
          تسجيل دخول
        </button>
        <button
          onClick={() => window.close()}
          type="button"
          className={`border-2 border-alert text-alert py-1 
          rounded-full font-bold hover:bg-alert hover:text-white 
          duration-200`}
        >
          إغلاق البرنامج
        </button>
      </div>
    </form>
  )
}

export default LoginForm
