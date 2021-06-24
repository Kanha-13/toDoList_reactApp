import { useState } from "react";

const Addtodo = ({ addTodos }) => {
    const submit = (e) => {
        e.preventDefault();
        addTodos(title, desc)
        setTitle("");
        setDesc("");
    }
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <div className="addtodos-div">
            <form onSubmit={submit} className="addtodos-from">
                <input required type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Title" />
                <input required type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder="Enter description" />
                <button type="submit" className="addtodos-btn">Add</button>
            </form>
        </div>
    );
}
export default Addtodo;