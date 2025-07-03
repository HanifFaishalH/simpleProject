import Todo from "./Todo.jsx";

function TodoList() {
    return (
        <ul>
            <Todo text="Belajar HTML" isCompleted={true} isDeleted={true} />
            <Todo text="Belajar CSS" isCompleted={true} />
            <Todo text="Belajar JavaScript" isCompleted={true} />
            <Todo text="Belajar React" isCompleted={false} />
        </ul>
    )
}

export default TodoList;