import { AddToDoBtn, Form, InputOption, InputSelect, InputSelectWrapper, ToDoInput } from "./ToDoStyles";

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
    <Form>
        <ToDoInput
        type="text"
        placeholder='Add to list'
        value={inputText}
        name="text"
        onChange={handleChange}
        ></ToDoInput>
        <AddToDoBtn onClick={handleSubmit}> Add </AddToDoBtn>
        <InputSelectWrapper>
            <InputSelect onChange={handleFilter}>
                <InputOption value="all">All</InputOption>
                <InputOption value="completed">Completed</InputOption>
                <InputOption value="uncompleted">Uncompleted</InputOption>
            </InputSelect>
        </InputSelectWrapper>
    </Form>
  )
}
