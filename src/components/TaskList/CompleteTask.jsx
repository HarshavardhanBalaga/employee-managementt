import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[300px] p-5 bg-orange-400 rounded-xl flex-shrink-0 hover:scale-[101%] transition-all duration-300 ease-in-out'>
             <div className="flex justify-between ">
             <h3 className='bg-red-500 text-sm px-3 py-1 rounded-lg'>{data.category}</h3>
             <h4 className='opacity-80'>{data.taskDate}</h4>
             </div>
             <h2 className='mt-2 text-2xl font-semibold '>{data.taskTitle}</h2>
             <p className='mt-2'>{data.taskDescription}</p>
             <div className='mt-4'>
                <button className='w-full bg-green-500 py-1 rounded-md'>Complete</button>
             </div>
        </div>
  )
}

export default CompleteTask