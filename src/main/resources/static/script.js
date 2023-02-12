let textInput = document.querySelector(`form input[type="text"]`);
let submitBtn = document.querySelector(`form input[type="submit"]`);
let taskesDiv = document.querySelector(".taskes");

function createTheElement() {
    let ele = `
        <div class="task">
            ${textInput.value}
            <buttom class="btn">Delete</buttom>
        </div>
    `
    return ele
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(textInput.value);

    if (textInput.value !== "") {
        taskesDiv.innerHTML += createTheElement();
    }

    textInput.value = "";
    textInput.focus();

    removeBtn();

    // theStorage();
});

function removeBtn() {
    let btn = document.querySelectorAll(".btn");

    btn.forEach((buttom) => {
        buttom.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
        });
    });
};
