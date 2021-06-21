import React, { useState } from 'react'
import '../styleSheets/addToDo.css'
const AddToDo = ({ addToDo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const addToList = (e) => {
        e.preventDefault()
        addToDo(title, desc)
        setTitle("")
        setDesc("")
    }
    return (
        <div className="addToDoContainer">
            <form onSubmit={addToList} className="addToDoContainer">
                <h2>Add ToDo</h2>
                <label htmlFor="title">Title</label>
                <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" placeholder="Enter Title" /><br />
                <label htmlFor="desc">Description</label>
                <input required type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} name="desc" placeholder="Enter Description" />
                <button type="submit" className="addTodo-btn">Add Todo</button>
            </form>
        </div>
    );
}
export default AddToDo