import { Link } from "react-router-dom";


function ListItem({ todo, onChecked, onDelete }) {
    return (
        <li><input type="checkbox" checked={todo.completed} onChange={() => onChecked(todo.id)} />
        <a href={"/todo/" + todo.id}>{todo.id}</a> / <a href={"/todo/" + todo.id}>{todo.todo}</a>
        <button onClick={() => onDelete(todo.id)}>삭제</button></li>
    );
}

export default ListItem;