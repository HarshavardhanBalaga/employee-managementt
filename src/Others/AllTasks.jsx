import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTasks = () => {

    const [userData, setUserData] = useContext(AuthContext)
    
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-56 flex items-center flex-col text-center mx-auto'>
        <div className=' bg-slate-600 font-medium mb-2 flex justify-between p-2 rounded w-full'>
        <h2 className="w-1/5" >Employee Name</h2>
        <h2 className="w-1/5" >New Task</h2>
        <h2 className="w-1/5" >Active Task</h2>
        <h2 className="w-1/5" >Completed</h2>
        <h2 className="w-1/5" >Failed</h2>
        </div>
        <div  id='alltasks'  className='h-[80%] w-full  overflow-auto'>
        {userData.map((elem, idx)=>{
            return <div key={idx} className='border-2 border-slate-500 mb-2 flex justify-between p-2 rounded w-full'>
            <h2 className='w-1/5 text-lg  font-semibold'>{elem.firstName}</h2>
            <h2 className="w-1/5 text-[17px] font-semibold text-yellow-400">{elem.taskNumbers.newTask}</h2>
            <h5 className='w-1/5 text-[17px] font-semibold text-blue-600'>{elem.taskNumbers.active}</h5>
            <h5 className='w-1/5 text-[17px] font-semibold text-green-600'>{elem.taskNumbers.completed}</h5>
            <h5 className='w-1/5 text-[17px] font-semibold text-red-500'>{elem.taskNumbers.failed}</h5>
        </div>
        })}
        </div>
        
    </div>
  )
}

export default AllTasks