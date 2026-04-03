const input = document.getElementById("data");
const btn =document.getElementById("btn");
const taskslist = document.getElementById("tasksl");
const progress = document.getElementById("prog");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function add(tasksobj) {

    let value2 = tasksobj;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type ="checkbox"
    checkbox.checked = tasksobj.done;

    const span = document.createElement("span");
    span.textContent = tasksobj.text;

    const del= document.createElement("button");
    del.textContent ="X"
    del.classList.add("del")


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del)
    taskslist.appendChild(li);

    checkbox.addEventListener("change",function(){
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";

        tasksobj.done = checkbox.checked;

        localStorage.setItem("tasks",JSON.stringify(tasks))
        progr()
    })

    del.addEventListener("click",function(){
        li.remove()

        tasks = tasks.filter(t => t !== value2)
        
        localStorage.setItem("tasks",JSON.stringify(tasks))
        progr()
    })

    if (tasksobj.done) {
        span.style.textDecoration = "line-through"
    }

}
btn.addEventListener("click",function(){
    const value = input.value.trim();
    if (value === "") return;
    const data = {
        text:value,
        done:false
    }
    tasks.push(data)
    add(data)

    localStorage.setItem("tasks",JSON.stringify(tasks))

    input.value = ""
    progr()
})
function progr() {
    let count = 0

    tasks.forEach(task=>{
        if (task.done){
            count++
        }
    });

    progress.textContent = `Progress ${count}/${tasks.length}`
    
}
input.addEventListener("keydown",function(e){
    if (e.key === "Enter") {
        btn.click()
    }
})
tasks.forEach(task => {
    if (task !== "") {
        add(task)
        progr()
    }
})
