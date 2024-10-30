import React from 'react'

const Header = (props) => {

  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload()
    props.changeUser("")
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>usename 👋</span> </h1>
        <button onClick={logoutUser} className='bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors duration-300'>Logout</button>
    </div>
  )
}

export default Header