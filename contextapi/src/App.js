import Navbar from "./components/navbar";
import TodoList from "./components/todo";
import ThemeContextProvider from "./context/themeContext";
import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
