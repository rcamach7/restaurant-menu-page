import "./styles.css";

const homePage = document.createElement("div");
homePage.classList.add("homePage");

function buildHook() {
    const customerHook = document.createElement("p");
    customerHook.classList.add("customerHook");
    customerHook.textContent = "All you can eat, dog dinner establishment! Here at Lazy Dog, we are paw-sionate about the food we serve! Human pets must be leashed!"

    return customerHook;
}

function buildChefContainer() {
    const chefContainer = document.createElement("div");
    chefContainer.classList.add("chefContainer");

    return chefContainer;
}

function buildCloser() {
    const closer = document.createElement("p");
    closer.classList.add("closer");
    closer.textContent = "Come dine with the worlds greatest chef! Chef Doritos";

    return closer;
}

homePage.appendChild(buildHook());
homePage.appendChild(buildChefContainer());
homePage.appendChild(buildCloser());

export default homePage;