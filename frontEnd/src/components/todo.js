import React from 'react'
import '../styleSheets/toDo.css'
const toDo = ({ todo, onDelete }) => {
    return (
        <div className="todoContainer">

            <h4>{todo.title}</h4>
            {/* <p>{sno + 1}</p> */}
            <p>{todo.desc}</p>
            <button className="del-btn" onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
    )
}
export default toDo;

