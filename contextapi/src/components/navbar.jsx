import React from "react";
import { ThemeContext } from "../context/themeContext";


class Navbar extends React.Component {
    static contextType = ThemeContext;

    render() {
        const {isDarkTheme, lightTheme, darkTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <nav style={{ background: theme.backgroundColor, 
                color: theme.text, height: '120px'}}>
                <h2 style={{textAlign: 'center'}}>
                    GreenPower
                </h2>
                <div className="ui three buttons">
                    <button className="ui button">Overview</button>
                    <button className="ui button">Contact</button>
                    <button className="ui button">Support</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;