const inputBox= document.getElementById("input-box")
const listContainer= document.getElementById("list-container")

function addtask(){
    if(inputBox.value===''){
        alert("you must write something")
    }
else{
    let li= document.createElement("li")
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span= document.createElement("span")
    span.innerHTML= "\u00d7"
    li.appendChild(span)
}
inputBox.value=""
saveData()
}

listContainer.addEventListener("click",function(e){
    // this will check li has toggle or not 
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData(0)
    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
//to display thedata when refresdh 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()     