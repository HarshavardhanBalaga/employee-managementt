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
    <div className='flex items-center justify-center h-screen w-full gap-8'>
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
                <button className='border-none bg-emerald-500 rounded-full py-2 px-5 text-xl outline-none mt-5 w-full'>Login</button>
                
            </form>
        </div>
        <div className='border-2 border-emerald-500 p-8 rounded-md'>
            <h2 className='text-xl font-bold mb-4 text-emerald-600'>Sample Login Credentials</h2>
            <div className='mb-4'>
                <h3 className='font-semibold text-lg mb-2'>Admin Login:</h3>
                <p>Email: admin@me.com</p>
                <p>Password: 123</p>
            </div>
            <div>
                <h3 className='font-semibold text-lg mb-2'>Employee Login:</h3>
                <p>Email: ravi@r.com</p>
                <p>Password: 123456</p>
            </div>
        </div>
    </div>
  )
}

export default Login