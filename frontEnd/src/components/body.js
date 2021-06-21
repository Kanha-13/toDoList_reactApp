import '../styleSheets/body.css';
import React from 'react'
import Todo from './todo.js';
const body = (props) => {
    return (
        <div className="body-div">
            <h3>To Do List</h3>
            {props.toDoList.length === 0 ? "No todos for now!!" :
                props.toDoList.map((todo, index) => {
                    return <Todo todo={todo} key={index} onDelete={props.onDelete} />
                })
            }
        </div>
    );
}
export default body;