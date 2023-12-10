import Navbar from "./components/navbar";
import TodoList from "./components/todo";
import ThemeContextProvider from "./context/themeContext";
import AuthContextProvider from "./context/authContext";
import TodoListContextProvider from "./context/todoListContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <TodoListContextProvider>
            <ThemeContextProvider>
              <Navbar />
              <TodoList />
            </ThemeContextProvider>
          </TodoListContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
