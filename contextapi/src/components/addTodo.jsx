import { useState, useContext } from "react"
import { TodoListContext } from "../context/todoListContext";

const AddToDo = () => {
    const {dispatch} = useContext(TodoListContext);
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo})
        setTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="addTo">Add to do</label>
            <input type="text" value={todo} id="addTo"
                onChange={(e) => setTodo(e.target.value)}/>
            <input type="submit" value="Add"  className="ui button primary"/>
        </form>
    )
}

export default AddToDo;