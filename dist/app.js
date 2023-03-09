import { render } from "./helpers/render-tasks.js";
import { renderCategories } from "./helpers/render.categories.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "hobby",
    },
    {
        name: "Pójśc na siłownię",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmić psa",
        done: false,
        category: "work",
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
