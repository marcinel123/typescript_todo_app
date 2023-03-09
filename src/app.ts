
const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks")

interface Task {
    name: string;
    done: boolean;
    category?: string;
}

const category = ["general", "work", "gym", "hobby"]


const tasks: Task[] = [{
    name: "Wyrzucić śmieci",
    done: false,
    category : "hobby"
}, {
    name: "Pójśc na siłownię",
    done: true,
    category: "gym"
}, {
    name: "Nakarmić psa",
    done: false,
    category: "work"
}]


const render = ()=>{
    tasksContainerElement.innerHTML = "";

    tasks.forEach((task, index)=>{

        const taskElement: HTMLElement = document.createElement("li")
        if (task.category) {
            taskElement.classList.add(task.category)
        }
        
        const id: string = `task-${index}`

        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.innerText = task.name
        labelElement.setAttribute("for", id)

        const checkBoxElement: HTMLInputElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = task.name;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done
        checkBoxElement.addEventListener("change", ()=>{
            task.done = !task.done;
        })

        taskElement.appendChild(labelElement)
        taskElement.appendChild(checkBoxElement)

        tasksContainerElement.appendChild(taskElement);
    })
}

const addTask = (task: Task)=>{
    tasks.push(task)
}

addButtonElement.addEventListener("click", (event: Event)=>{
    event.preventDefault();
    addTask({name: taskNameInputElement.value, done: false});
    render();
})

render();