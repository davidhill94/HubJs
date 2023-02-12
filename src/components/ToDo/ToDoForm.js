export const ToDoForm = ({ todos, setTodos, setInputText, inputText, setFilter }) => {

    const handleSubmit = e => {
        e.preventDefault();
        setInputText("");
        setTodos([
            ...todos, {text: inputText, id: Math.random() * 1000, completed: false}
        ])
    };

    const handleChange = e => {
        setInputText(e.target.value)
    };

    const handleFilter = e => {
        setFilter(e.target.value)
    }

  return (
    <form>
        <input
        type="text"
        placeholder='Add to list'
        value={inputText}
        name="text"
        onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}> + </button>
        <div>
            <select onChange={handleFilter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}
