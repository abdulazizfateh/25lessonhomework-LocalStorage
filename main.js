const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input");
const cards = document.querySelector(".cards");


const render = () => {
    let data = JSON.parse(localStorage.getItem("users")) || [];
    cards.innerHTML = data.map((item) =>
        `<div class="card">
            <h1 class="card_name">${item.firstname}</h1>
            <h3 class="card_age">${item.age}</h3>
            <button onclick="deleteItem(${item.id})" class="deleteBtn">Delete</button/>
        </div>`).join("") || [];
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj = { id: Date.now() };
    for (let i = 0; i < inputs.length; i++) {
        obj[inputs[i].name] = inputs[i].value;
        inputs[i].value = '';
    };
    const oldData = JSON.parse(localStorage.getItem("users")) || [];
    const result = JSON.stringify([obj, ...oldData]);
    localStorage.setItem("users", result);
    render();
});
render();





const deleteItem = (id) => {
    let data = JSON.parse(localStorage.getItem("users"));
    const result = data.filter((item) => item.id !== id);
    localStorage.setItem("users", JSON.stringify(result));
    render();
};









































// const editItem = (id) => {
//     firstname = prompt('First name');
//     age = prompt('Age');
//     data = data.map((item) => id == item.id ? { id, firstname, age } : item);
//     render();
// };
















// let data = [10, 11, 20, 10];
// let id = 10;
// const deleteItem = (id) => {
//     data = data.filter((item) => item !== id);
//     return data;
// };
// console.log(deleteItem(id));
