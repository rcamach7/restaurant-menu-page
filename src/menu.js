import "./styles.css";

const menuPage = document.createElement("div");
menuPage.classList.add("menuPage");


function loadDish(numDish, recipe) {
    const dish = document.createElement("div");
    dish.classList.add("dish" + numDish);

    const dishImage = document.createElement("div");
    dishImage.classList.add(`dish${numDish}Image`);

    const ingredients = document.createElement("div");
    ingredients.classList.add("ingredients");

    for (let i = 0; i < recipe.length; i++) {
        const line = document.createElement("p");
        line.textContent = recipe[i];
        ingredients.appendChild(line);
    }
    dish.appendChild(dishImage);
    dish.appendChild(ingredients);

    return dish;
}

menuPage.appendChild(loadDish("One", ["The Classic!", "- freshly sourced", "- gluten free", "- never frozen"]));
menuPage.appendChild(loadDish("Two", ["Chicken Soup", "- fresh chickens", "- low sodium broth", "- protein packed"]))
menuPage.appendChild(loadDish("Three", ["The Mixed Bowl!", "- best of all worlds", "- served with a side of jerky", "- protein packed"]))

export default menuPage;