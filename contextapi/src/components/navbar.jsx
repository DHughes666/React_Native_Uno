import React from "react";
import { ThemeContext } from "../context/themeContext";
import {AuthContext} from "../context/authContext";


class Navbar extends React.Component {
    static contextType = ThemeContext;

    render() {
        
        return (
            <AuthContext.Consumer>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(context) => {
                        const {isLoggedIn, authen} = authContext;
                        const {isDarkTheme, lightTheme, darkTheme} = context;
                        const theme = isDarkTheme ? darkTheme : lightTheme;

                        return (
                            <nav style={{ background: theme.backgroundColor, 
                                color: theme.text, height: '120px'}}>
                                <h2 style={{textAlign: 'center'}}>
                                    GreenPower
                                </h2>
                                <p onClick={authen} style={{textAlign: 'center'}}>{
                                    isLoggedIn ? 'logged in': 'logged out'
                                    }</p>
                                <div className="ui three buttons">
                                    <button className="ui button">Overview</button>
                                    <button className="ui button">Contact</button>
                                    <button className="ui button">Support</button>
                                </div>
                            </nav>
                        )
                    }}
                        
                    </ThemeContext.Consumer>
                )
            }}

            </AuthContext.Consumer>
            
        )
    }
}

export default Navbar;