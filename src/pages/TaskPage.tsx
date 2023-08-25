import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, RootState } from '../stores';

const Task = () => {
    const [ query, setQuery ] = useState("");
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();
    
    const handleAddNewTask = (newTask: string) => {
        dispatch(addTask(newTask));
    };

    const handleRemoveTaks = () => {
        dispatch(removeTask());
    };


    return (
        <div>
        <h2>Tasks:</h2>
        { tasks.map((item, index) => <div key={index}>{item}</div>) }
        <input type="text" value={query} onChange={(e)=> { setQuery(e.target.value)}}/>
        <button onClick={()=>handleAddNewTask(query)}>Add New Task</button>
        <button onClick={()=>handleRemoveTaks}>Remove Task</button>
        </div>
    );
};

export default Task;