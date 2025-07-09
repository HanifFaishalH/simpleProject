import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactForm from "./ContactForm";
import ContactFormImmer from "./ContactFormImmer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContactForm />
        <hr />
        <h1>Using useImmer</h1>
        <ContactFormImmer />
    </StrictMode>
);