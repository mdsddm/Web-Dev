let btn = document.querySelector("button");
let input = document.querySelector("#in");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
    let list = document.createElement("li");
    list.innerText = input.value;
    let dlbtn = document.createElement("button");
    dlbtn.innerText = "X";
    dlbtn.classList.add("dlt");
    list.appendChild(dlbtn);

    ul.appendChild(list);
});
ul.addEventListener("click", function (event) {

    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }

});