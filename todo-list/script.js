// Wait for user to press the "Pin it!" button or hit enter, then run addTodo() function.
document.getElementById("pin-btn").addEventListener("click", addTodo);
document.getElementById("new-todo").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Code which adds todo option to our list.
function addTodo() {

    // + Get todoInput and todoList from document

    // + Alert user if their input is empty

    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", function () {
        // + Add update counter call

        this.disabled = true;
    });

    const taskText = document.createTextNode(todoInput.value);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    todoList.appendChild(listItem);

    todoInput.value = "";
}

function updateCounter(value) {
    // + Implement updateCounter
}
