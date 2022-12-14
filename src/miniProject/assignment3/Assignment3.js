import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style3.css'
import TaskNewTodo from './TaskNewTodo';
import TaskTodos from './TaskTodos';

const todosData = [
    {
        id: uuidv4(),
        title: 'read react documentation',
        desc: 'react documentation might be boring but I can do it'
    },
    {
        id: uuidv4(),
        title: 'do react assignment',
        desc: 'react assignments might be boring but I can do it'
    }
];

const Assignment3 = () => {
    const [taskTodos, setTaskTodos] = useState(todosData);

    const handleTaskNewTodo = taskNewTodo => {
        setTaskTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), title: taskNewTodo.title, desc: taskNewTodo.desc }]
        })
    }

    const handleRemoveTodo = id => {
        // const restTodo = taskTodos.filter(taskTodo => taskTodo.id !== id);
        // setTaskTodos(restTodo);
        setTaskTodos( oldTodos =>{
            const restTodo = taskTodos.filter(taskTodo => taskTodo.id !== id)
            return restTodo;
        })
    }

    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '20px', 'margin': '10px' }}>
            <div>
                <h1>React Assignment - 3 : Create new Resource</h1> <br />

                <h4>Testing students skills on</h4>

                <ul>
                    <li>useState() hook</li>
                    <li>Controlled component</li>
                    <li>state lifting</li>
                </ul>

                <br />

                <h4> <strong>Assignment steps:</strong></h4>

                <ol>
                    <li> part 1: Things you have to do in NewTodo component
                        <ul>
                            <li>Store all the user inputs inside todo state and use the handleChange function for handling the onChange events for all the input fields </li>
                            <li>handle the form submission in a way that the new todo data is passed to App.js Component</li>
                            <li>Please reset the form data after submitting the form</li>
                        </ul>
                    </li>

                    <li>part 2: Things you have to do in App.js component
                        <ul>
                            <li>update the todos state with the newTodo data from NewTodo component</li>
                        </ul>
                    </li>

                    <li>finally check the project demo and try to match your one as much as possible. <a href="https://create-new-todo.netlify.app/" target="blank">Link</a></li>
                </ol>
            </div>
            <hr />
            <hr />

            <div className='assignment3'>
                <div className='task-container'>
                    <TaskNewTodo onNewTodo={handleTaskNewTodo} />
                    <h1 className='task-title'>Todo</h1>
                    <TaskTodos
                        taskTodos={taskTodos}
                        onRemoveTodo={handleRemoveTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default Assignment3;