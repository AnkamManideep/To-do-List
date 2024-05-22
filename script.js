const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");


// Adding functionality to the button
function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something.......!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//Saving The Data in Browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}  

//Display the Data when opening the Browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();