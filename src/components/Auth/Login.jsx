import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <div className='border-2 border-emerald-500 p-20 rounded-md'>
            <form onSubmit={(e) =>{
                submitHandler(e)
                 
             }} 
             className='flex flex-col items-center justify-center'>
                <input 
                    required
                    value={email} 
                    className='border-2 font-semibold border-emerald-500 rounded-full py-3 px-5 text-xl outline-none bg-transparent' 
                    type="email" 
                    placeholder='Ex: user@gmail.com' 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    required 
                    className='border-2 font-semibold border-emerald-500 rounded-full py-3 px-5 text-xl outline-none bg-transparent mt-2' 
                    type="password"
                    value={password} 
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button className='border-npne bg-emerald-500 rounded-full py-2 px-5 text-xl outline-none mt-5 w-full'>Login</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login