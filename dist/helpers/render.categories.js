export const renderCategories = (categories, categoriesContainerElement, inputChangeCallBack) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallBack(category);
        });
        const LabelElement = document.createElement("label");
        LabelElement.setAttribute("for", `category-${category}`);
        LabelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(LabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
