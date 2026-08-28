let add = document.querySelector("#addExp");
let expName = document.querySelector("#expName");
let amt = document.querySelector("#amt");
let date = document.querySelector("#date");
let tbody = document.querySelector("tbody");
let catergory = document.querySelector("#category");
let state = "add";
let currentEditingRow = null;

add.addEventListener("click", (event) => {
    if(state === "add"){
        event.preventDefault();
        createTableRow();
    }else if(state === "edit"){
        event.preventDefault();
        currentEditingRow.innerHTML = `<td>${expName.value}</td>
                                    <td>$${amt.value}</td>
                                    <td>${catergory.value}</td>
                                    <td>${date.value}</td>
                                    <td>
                                        <button class="edit">Edit</button>
                                        <button class="delete">Delete</button>
                                    </td>`;

        state = "add";
        add.innerText = "Add Expense";
        addListenerDelete();
        addListenerEdit();
        expName.value = "";
        amt.value = "";
        date.value = "";
        catergory.value = "";
    }
    
});

function createTableRow(){
    if(expName.value === "" || amt.value == "" || date.value == "" || catergory.value == ""){
        alert("Enter the required value");
    }else {
        let innerHtml = `<tr>
                <td>${expName.value}</td>
                <td>$${amt.value}</td>
                <td>${catergory.value}</td>
                <td>${date.value}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            </tr>`

            tbody.insertAdjacentHTML('beforeend', innerHtml);


            addListenerDelete();
            addListenerEdit();

            expName.value = '';
            amt.value = '';
            date.value = '';
            catergory.value = '';

    }
    
}

function addListenerEdit(){
    let edit = document.querySelectorAll(".edit");
            for(ed of edit){
                ed.addEventListener("click",(event) => {
                    // console.log((event.target.parentElement.parentElement.children[0]));

                    let tr = event.target.parentElement.parentElement.children;
                    let tr1 = event.target.parentElement.parentElement;
                    console.log(tr1.innerHTML);
                    expName.value = tr[0].innerHTML;
                    amt.value = tr[1].innerHTML.replace("$","");
                    catergory.value = tr[2].innerHTML;
                    date.value = tr[3].innerHTML;
                    console.log("Edit button was pressed");

                    currentEditingRow = event.target.parentElement.parentElement;
                    add.innerText = "Update";
                    state = "edit";
                });
            }
}

function addListenerDelete(){
    let del = document.querySelectorAll(".delete");
            for(btn of del){
                btn.addEventListener("click", (event) => {
                    console.log("Delete button clicked"); 
                    console.log(event.target.parentElement.parentElement);
                    event.target.parentElement.parentElement.remove();
                });
            }
}