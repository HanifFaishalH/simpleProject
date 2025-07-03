import Todo from "./Todo.jsx";

function TodoList() {
    const data = [
        { 
            id: 0,
            text: "Learn HTML", 
            isCompleted: true, 
            isDeleted: true 
        },
        { 
            id: 1,
            text: "Learn CSS", 
            isCompleted: true, 
            isDeleted: false 
        },
        { 
            id: 2,
            text: "Learn JavaScript", 
            isCompleted: true, 
            isDeleted: false 
        },
        { 
            id: 3,
            text: "Learn React", 
            isCompleted: false, 
            isDeleted: false 
        },
        { 
            id: 3,
            text: "Learn React JS Hooks", 
            isCompleted: false, 
            isDeleted: false 
        }
    ]

    // const todos = data.map((todo) => {
    //     return <Todo key={todo.id} {...todo}/>
    // })

    return (
        <ul>
            {data.map((todo)=> (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList;