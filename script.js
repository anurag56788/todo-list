let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

add.addEventListener("click", function () {
    if (inp.value.trim() === '') {
        alert("Please enter a value");
    } else {
        let li = document.createElement("li");
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = '';
    }
});

remove.addEventListener("click", function () {
    let lastItem = ul.lastElementChild;
    if (lastItem) {
        ul.removeChild(lastItem);
    } else {
        alert("No items to remove");
    }
});
