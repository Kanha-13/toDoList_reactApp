import Header from "./Header";
const AddToDoForm = () => {
    return (
        <div className="addForm">
            <Header cls="addHeader" title="➕ Add Tods" />
            <input type="text" placeholder="Enter Titles" />
            <input type="text" placeholder="Enter Titles" />
            <div className="datePicker">
                <input id="date" type="number" defaultValue="1" min="1" max="31" />
                <select name="" id="month">
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>
                <input id="year" type="number" defaultValue="2021" min="2021" max="2050" />
            </div>
            <button className="addBtn">Add</button>
        </div>
    );
}
export default AddToDoForm;