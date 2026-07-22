let arr = [];

let choice = prompt("Enter the task you want to perform");
 
while(true){
    if(choice == "quit"){
        console.log("Quitting App");
        break;

    }else if(choice == "list"){
        console.log("-------------");
        for(let i = 0; i < arr.length; i++){
            console.log(i, arr[i]);
        }
        console.log("-------------");

    }else if(choice == "add"){
        let task = prompt("Enter the task you want to add");
        arr.push(task);

    }else if(choice == "delete"){
        let idx = prompt("Enter the index you want to delete task from");
        arr.splice(idx,1);
        console.log("Task Deleted");

    }else {
        console.log("Invalid choice");
    }

    choice = prompt("Enter the task you want to perform");

}