const Todos = ({ deleteTodos, todosList }) => {
    const buttonStyle = {
        backgroundColor: "red",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }
    return (
        <div className="todos-div">
            <h4>{todosList.title}</h4>
            <p>{todosList.desc}</p>
            <button style={buttonStyle} onClick={() => deleteTodos(todosList)}>Delete</button>
        </div>
    );
}
export default Todos;