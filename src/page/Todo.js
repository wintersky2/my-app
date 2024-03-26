import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Todo() {
    const id = useParams();

    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/todos/' + id.id)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])

    return (
        <>
            <div>Id : {todo.id}</div>
            <div>content : {todo.todo}</div>
        </>
    );
}

export default Todo;