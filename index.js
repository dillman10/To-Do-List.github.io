const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (input.value === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", (e)  => {
    console.log(e);
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks()