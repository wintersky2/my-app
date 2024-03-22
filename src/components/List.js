import ListItem from "./ListItem";


function List({ todos, onChecked, onDelete }) {
    return (
        <ul>
            {todos.map(todo => <ListItem todo={todo} onDelete={onDelete} onChecked={onChecked} />)}
        </ul>
    );
}

export default List;