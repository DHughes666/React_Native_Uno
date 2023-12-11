import React, {useContext} from "react";
import { ThemeContext } from "../context/themeContext";
import { TodoListContext } from "../context/todoListContext";
import AddToDo from "./addTodo";

const TodoList = () => {
    const {isDarkTheme, lightTheme, 
        darkTheme, changeTheme} = useContext(ThemeContext)
    const {todos, dispatch} = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div style={{background: theme.backgroundColor,
            color: theme.text, textAlign: 'center'}} >
            {
                todos.length ? (
                    todos.map((todo) => (
                        <p className="item" key={todo.id}>
                            {todo.text}{' '} 
                            <button onClick={
                                dispatch({type: 'REMOVE_TODO', id: todo.id})
                            }>Remove Item</button>
                        </p>
            ))
                ) : (
                    <div>You have no todos</div>
                )
            }
            <AddToDo />
            
            <button type="button" className="ui button primary" 
                onClick={changeTheme}>
                change the theme
            </button>
        </div>
    )
}

// class TodoList extends React.Component {
//     static contextType = ThemeContext

//     render() {
//         const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return (
//             <div style={{background: theme.backgroundColor,
//              color: theme.text, height: '140px', textAlign: 'center'}} >
//                 <p className="item">Plan the family trip</p>
//                 <p className="item">Go shopping for dinner</p>
//                 <p className="item">Go for a walk</p>
//                 <button type="button" className="ui button primary" 
//                     onClick={changeTheme}>
//                     change the theme
//                 </button>
//             </div>
//         )
//     }
// }

export default TodoList;