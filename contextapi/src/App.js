import Navbar from "./components/navbar";
import TodoList from "./components/todo";
import ThemeContextProvider from "./context/themeContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
