import { createContext, useReducer } from "react";

export const TodoListContext = createContext();

const todosReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
           return [...state, {text: action.text, id: Math.random()}] 
        }
        case 'REMOVE_TODO': {
            return state.filter((todo) => todo.id !== Number(action.id));
        }
        default: {
            return state
        }
    }
}

const TodoListContextProvider = ({children}) => {
    const initialState = [
            {text: 'Plan the family trip', id: 1},
            {text: 'Go shopping for dinners', id: 2},
            {text: 'Go for a walk', id: 3},
            {text: 'Code for 4 hours', id: 4},
        ]

    
    const [todos, dispatch] = useReducer(todosReducer, initialState);

    const values = {todos, dispatch}

    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;