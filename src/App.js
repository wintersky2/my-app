import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import TodoList from "./page/TodoList";
import Todo from "./page/Todo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/todos" element={<TodoList />}></Route>
        <Route path="/todo/:id" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;