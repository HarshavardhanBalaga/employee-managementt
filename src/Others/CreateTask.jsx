import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
    const [addtask, setAddTask] = useState({});

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskAssignTo, setTaskAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const [userData, setUserData] = useContext(AuthContext);
    const submitHandler = (e) => {
        e.preventDefault();

        // Create the task object
        const newTask = { taskTitle, taskDescription, taskDate, category, active:false, completed:false, failed:false, newTask:true };

        // Log the new task object before updating the state
        const data = userData;
        data.forEach(function(elem){
           if(taskAssignTo === elem.firstName){
            elem.tasks.push(addtask);
            console.log(elem.tasks);
            elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
           }
        })
        setUserData(data);
        localStorage.setItem('employees', JSON.stringify(userData));
        localStorage.getItem(JSON.stringify(data))
        console.log(data);
        
        
        
        
        // Update the task state
        setAddTask(newTask);

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setTaskAssignTo('')
        setCategory('')
        
    };

    return (
        <div>
            <form onSubmit={(e) => {submitHandler(e);}} className='flex w-full flex-wrap items-center justify-between rounded-xl mt-5 bg-[#1c1c1c] p-7 h-[400px]'>
                <div className='h-full w-[40%]'>
                    <div className='p-2'>
                        <h3 className='text-lg'>Task Title</h3>
                        <input
                            type="text"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder='Make a UI Design'
                            className='w-full bg-transparent border-2 border-[#444] rounded-lg p-2 text-[#fff] outline-none'
                        />
                    </div>
                    <div className='p-2'>
                        <h3 className='text-lg '>Date</h3>
                        <input
                            type="date"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='w-full bg-transparent border-2 border-[#444] rounded-lg p-2 text-[#fff] outline-none'
                        />
                    </div>
                    <div className='p-2'>
                        <h3 className='text-lg'>Assign to</h3>
                        <input
                            type="text"
                            value={taskAssignTo}
                            onChange={(e) => setTaskAssignTo(e.target.value)}
                            placeholder='Employee Name'
                            className='w-full bg-transparent border-2 border-[#444] rounded-lg p-2 text-[#fff] outline-none'
                        />
                    </div>
                    <div className='p-2'>
                        <h3 className='text-lg'>Category</h3>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder='design, dev, etc..'
                            className='w-full bg-transparent border-2 border-[#444] rounded-lg p-2 text-[#fff] outline-none'
                        />
                    </div>
                </div>

                <div className='w-[40%]'>
                    <h3 className='text-lg'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full bg-transparent border-2 border-[#444] rounded-lg p-2 text-[#fff] outline-none resize-none h-40 mt-1'
                    ></textarea>
                    <button className='py-2 border-none bg-emerald-600 w-full mt-2 rounded-lg text-lg'>Create Task</button>
                </div>
            </form>
           
        </div>
    );
};

export default CreateTask;
