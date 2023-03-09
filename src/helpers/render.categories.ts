import { Category } from "../types";

export const renderCategories = (categories: Category[], categoriesContainerElement: HTMLElement, inputChangeCallBack: (category: Category)=>void) => {
    categories.forEach((category) => {
      const categoryElement: HTMLElement = document.createElement("li");
      const radioInputElement: HTMLInputElement = document.createElement("input");
      radioInputElement.type = "radio";
      radioInputElement.name = "category";
      radioInputElement.value = category;
      radioInputElement.id = `category-${category}`;
      radioInputElement.addEventListener("change", () => {
        inputChangeCallBack(category);
      });
  
      const LabelElement: HTMLLabelElement = document.createElement("label");
      LabelElement.setAttribute("for", `category-${category}`);
      LabelElement.innerText = category;
  
      categoryElement.appendChild(radioInputElement);
      categoryElement.appendChild(LabelElement);
  
      categoriesContainerElement.appendChild(categoryElement);
    });
  };