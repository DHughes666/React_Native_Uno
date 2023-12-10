import React, {createContext, useState} from "react";

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    
    const changeAuthStatus = () => {
        setisLoggedIn(!isLoggedIn);
    }

    const values = {isLoggedIn, changeAuthStatus}

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

// class AuthContextProvider extends React.Component {

//     state = {
//         isLoggedIn: false,
//     };

//     changeAuthStatus = () => {
//         this.setState({ isLoggedIn: !this.state.isLoggedIn });
//     }

//     render() {
//         return (
//             <AuthContext.Provider 
//             value={{...this.state, authen: this.changeAuthStatus}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

export default AuthContextProvider;