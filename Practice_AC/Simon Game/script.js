let items = document.querySelectorAll(".item");
for(item of items){
    item.addEventListener("click", () => {
        console.log("item clicked");
    });
}