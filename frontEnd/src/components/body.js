import AddToDoForm from "./AddToDoForm";
import ListOfToDos from "./ListOfToDos";
import '../css/body.css'
const Body = () => {
    return (
        <div className="mainBody">
            <AddToDoForm />
            <ListOfToDos />
        </div>
    );
}
export default Body;