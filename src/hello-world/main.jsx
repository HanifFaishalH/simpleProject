import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/myButton.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table />
        
            <AlertButton text="Click Me" message="hey, you clicked me" />

            <MyButton text="Smash Me" onSmash={() => alert("You smashed me!")} />

            <Toolbar onClick={(e) =>{
                e.stopPropagation()
                alert("You clicked the toolbar button!");
            }}/>

            <SearchForm />
            <SayHelloForm />
        </Container>
    </StrictMode>
)