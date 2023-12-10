import { useState, createContext } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'Plan the family trip', id: 1},
        {text: 'Go shopping for dinners', id: 2},
        {text: 'Go for a walk', id: 3},
        {text: 'Code for 4 hours', id: 4},
    ])

    const addTodo = (todo) => {
        setTodos([...todos, {text: todo, id: Math.random()}])
    }

    const values = {todos, addTodo}

    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;