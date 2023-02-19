let textInput = document.querySelector(`form input[type="text"]`);
let submitBtn = document.querySelector(`form input[type="submit"]`);
let taskesDiv = document.querySelector(".taskes");

// Retrieve tasks from localStorage on page load
if (localStorage.getItem("tasks")) {
    taskesDiv.innerHTML = localStorage.getItem("tasks");
    removeBtn();
}

function createTheElement() {
    let ele = `
        <div class="task">
            ${textInput.value}
            <button class="btn">Delete</button>
        </div>
    `;
    return ele;
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (textInput.value !== "") {
        taskesDiv.innerHTML += createTheElement();
    }

    textInput.value = "";
    textInput.focus();

    removeBtn();

    // Save tasks to localStorage
    try {
        localStorage.setItem("tasks", taskesDiv.innerHTML);
        console.log("Tasks saved to localStorage:", localStorage.getItem("tasks"));
    } catch (e) {
        console.error("Error saving tasks to localStorage:", e);
    }
});

function removeBtn() {
    let btn = document.querySelectorAll(".btn");

    btn.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentElement.remove();

            // Save tasks to localStorage after a task is deleted
            try {
                localStorage.setItem("tasks", taskesDiv.innerHTML);
                console.log("Tasks saved to localStorage:", localStorage.getItem("tasks"));
            } catch (e) {
                console.error("Error saving tasks to localStorage:", e);
            }
        });
    });
};
