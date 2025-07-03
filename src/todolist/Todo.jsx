function Todo({text, isCompleted, isDeleted = false}) {
    if (isDeleted) {
        return null; // Do not render anything if the todo is deleted
    }
    // else if (isCompleted) {
    //     return <li><del>{text}</del></li>
    // }
    // else {
    //     return <li>{text}</li>;
    // }

    else {
        return (
            <li>
                {/* //ternary */}
                {/* {isCompleted ? <del>{text}</del> : text} */}

                {/* logical AND */}
                {text} {isCompleted && '✅'}
            </li>
        )
    }
}

export default Todo;