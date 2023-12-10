import React from "react";
import { ThemeContext } from "../context/themeContext";

class TodoList extends React.Component {
    static contextType = ThemeContext

    render() {
        const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{background: theme.backgroundColor,
             color: theme.text, height: '140px', textAlign: 'center'}} >
                <p className="item">Plan the family trip</p>
                <p className="item">Go shopping for dinner</p>
                <p className="item">Go for a walk</p>
                <button type="button" className="ui button primary" 
                    onClick={changeTheme}>
                    change the theme
                </button>
            </div>
        )
    }
}

export default TodoList;