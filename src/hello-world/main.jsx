import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import { StrictMode } from "react";
import Container from "./Container.jsx";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
        </Container>
    </StrictMode>
)