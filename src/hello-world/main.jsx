import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import Todo from "../todolist/Todo.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table />
        </Container>
    </StrictMode>
)