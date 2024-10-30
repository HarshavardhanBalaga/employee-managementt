import React from 'react'
import Header from '../../Others/Header'
import CreateTask from '../../Others/CreateTask'
import AllTasks from '../../Others/AllTasks'

const AdminDashboard = (props) => {
  
  return (
    <div className='h-screen w-full px-10 py-5'>
       <Header changeUser={props.changeUser} />
       <CreateTask />
       <AllTasks />
    </div>
  )
}

export default AdminDashboard