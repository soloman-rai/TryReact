import React, { useState, useEffect } from 'react';

import {Button, TextField} from '@material-ui/core';
import Task from './components/Task';
import {db} from './firebase';
import firebase from 'firebase';


// Function based components vs Class based components
function ToDoApp() {
        // useState is a React Hook to set states 🔥 
        const [todos, setTodos] = useState([]);
        const [newTask, setNewTask] = useState('');

        // when the app loads, the database should be checked for existing tasks that are to be fetched 
        // useEffect(function, dependencies)
        useEffect(() => {
            // this code loads when the app loads
            db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                // console.log(snapshot.docs.map(doc => doc.data()));
                setTodos(snapshot.docs.map(doc => ({id: doc.id, title: doc.data().task, timestamp: doc.data().timestamp})));  
            })
        }, []);

        const addNewTask = (e) => {
            // this.setTodos
            e.preventDefault();
            // console.log('🔥', 'Working' )

            // Adding new task to the Firebase database
            db.collection('todos').add({
                //adds the task as a new document and fire a snapshot so the list is updated
                task: newTask,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
                // the timestamp from firebase server has been used so that the timestamp is consistent 
            })

            setTodos([...todos, newTask])
            setNewTask('');
        };

        return(
            <div>
                <h1>Hello guys 🤞 </h1>

                <form onSubmit={addNewTask}>
                <TextField value={newTask} onChange={event => setNewTask(event.target.value)} label="New Task ➕" />
                <Button variant="contained" color="primary" disabled={!newTask}>
                    Add Task
                </Button>
                </form>

                <ul>
                {todos.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
                </ul>

            </div>
        )
}


export default ToDoApp;