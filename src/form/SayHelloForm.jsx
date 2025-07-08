function SayHelloForm() {
    function handleClick(e) {
        e. preventDefault(); // Prevent form submission
        const name = document.querySelector("#input_name").value;
        document.querySelector("#text_hello").innerHTML = `Hello ${name}`;
    }

    return (
        <div>
            <form>
                <input id="input_name" />
                <button type="button" onClick={handleClick}>Say Hello</button>
            </form>
            <h1 id="text_hello">Hello World</h1>
        </div>
    )
}
export default SayHelloForm;