// let btn = document.querySelector("#btn");
// let inp = document.querySelector("#input");
// let taskList = [];
// let todo = document.querySelector("#todo");
// let todoList = document.querySelector("#todoList");
// let comTaks = document.querySelector("#completedTasks");


// btn.addEventListener("click", (event) => {
//     event.preventDefault();
//     // taskList.push(inp.value);
//     // inp.value = "";
//     console.log("Added");
//     console.log(taskList);

//     updateTodo(inp.value);
// });

// function updateTodo(value) {
//     // todo.innerHTML = taskList;
//     todoList.append(value);
//     inp.value = "";
//     // for(let i = 0; i < taskList.length; i++){
//     //     todoList.append(taskList[i]);
//     //     console.log(taskList.length);
//     //     console.log(taskList[i]);
//     //     console.log(todoList.innerHTML);
//     // }
// }



// ------------------------------------
let counter = 101;
let taskList = [];
let inp = document.querySelector("#input");
let btn = document.querySelector("#btn");
let todoList = document.querySelector("#todoList");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let obj = createObj(inp.value);
    inp.value = "";
    // console.log("Added");
    // console.log(taskList);

    addTo(obj);
    newElement(obj);
    // displayTodo(obj);
    // updateTodo(inp.value);
});

function createObj(name){
    const obj = {
        taskName: name,
        completed: false,
        id: counter
    };
    counter++;
    return obj;
}

function addTo(obj){
    taskList.push(obj);
}


function newElement(obj){
    let taskRow = document.createElement("div");
    let newInp = document.createElement("input");
    let label = document.createElement("label");

    taskRow.setAttribute("class", "taskRow");

    newInp.setAttribute("type", "checkbox");
    newInp.setAttribute("id", `${obj.id}`);

    label.setAttribute("for", `${obj.id}`);
    label.append(obj.taskName);

    taskRow.appendChild(newInp);
    taskRow.appendChild(label);

    todoList.appendChild(taskRow);

    newInp.addEventListener("change", (event) => {
        let id = event.target.id;
        let task = taskList.find((task) => {
            return task.id == id;
        });
        task.completed = true;
        console.log(task);
    });
}

