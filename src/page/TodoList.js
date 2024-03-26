import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import List from "../components/List";
import Insert from "../components/Insert";

function TodoList() {
    const lastId = useRef(4);

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data.todos));
    }, [])

    const onInsert = (e) => {
        e.preventDefault();
        // 1. 내가 입력한 걸 어떻게 가져오지?
        console.log(e.target.text.value)

        // 2. 가져온 입력 값을 배열에 어떻게 추가하지?

        // setTodos(todos.concat({text: e.target.text.value}))
        setTodos([...todos, { id: lastId.current, text: e.target.text.value, checked: false }])
        lastId.current++;
        console.log(todos)
    }

    const onDelete = (id) => {
        const deleteTodos = todos.filter(todo => todo.id !== id)
        setTodos(deleteTodos)
    }

    const onChecked = (id) => {
        const checkedTodos = todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        setTodos(checkedTodos)
    }

    return (
        <div>
            <Nav headerName="오늘 할 일" />
            <Insert todos={todos} onInsert={onInsert} />
            <List todos={todos} onChecked={onChecked} onDelete={onDelete} />
        </div>
    );
}

export default TodoList;