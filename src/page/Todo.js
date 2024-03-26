import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

function Todo() {
    const params = useParams();

    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/todos/' + params.id)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])

    return (
        <>
            <Layout>
                <ul>
                    <li>id : {todo.id}</li>
                    <li>content : {todo.todo}</li>
                    <li>checked : {todo.completed ? "true" : "false"}</li>
                    <li>userId : {todo.userId}</li>
                </ul>
            </Layout>

        </>
    );
}

export default Todo;