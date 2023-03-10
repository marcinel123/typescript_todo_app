import { render } from "./helpers/render-tasks.js";
import { renderCategories } from "./helpers/render.categories.js";
import { Category, Task } from "./types.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY, Category.SOCIAL];

const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: false,
    category: Category.HOBBY,
  },
  {
    name: "Pójśc na siłownię",
    done: true,
    category: Category.GYM,
  },
  {
    name: "Nakarmić psa",
    done: false,
    category: Category.WORK,
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
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
