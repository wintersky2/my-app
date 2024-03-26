import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import TodoList from "./page/TodoList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/todos" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;