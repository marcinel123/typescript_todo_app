
const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks")


const tasks: {
    name: string;
    done: boolean;
}[] = [{
    name: "Wyrzucić śmieci",
    done: false
}, {
    name: "Pójśc na siłownię",
    done: true
}, {
    name: "Nakarmić psa",
    done: false
}]


const render = ()=>{
    tasksContainerElement.innerHTML = "";

    tasks.forEach((task, index)=>{

        const taskElement: HTMLElement = document.createElement("li")
        const id: string = `task-${index}`

        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.innerText = task.name
        labelElement.setAttribute("for", id)

        const checkBoxElement: HTMLInputElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = task.name;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done

        taskElement.appendChild(labelElement)
        taskElement.appendChild(checkBoxElement)

        tasksContainerElement.appendChild(taskElement);
    })
}

const addTask = (taskName: string)=>{
    tasks.push({name: taskName, done: false})
}

addButtonElement.addEventListener("click", (event: Event)=>{
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
})

render();