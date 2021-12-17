import "./styles.css";
import homePage from "./home";
import menuPage from "./menu";

const root = document.getElementById("content");
root.classList.add("root");

function buildTitle() {
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
    // Build title
    const logo = document.createElement("h1");
    logo.textContent = "🅻🅰🆉🆈 🅱🅾🆈";
    logo.classList.add("logo");


    titleContainer.appendChild(logo);
    titleContainer.appendChild(buildNav());

    return titleContainer;
}

function buildNav() {
    const navBar = document.createElement("nav");
    navBar.classList.add("navContainer");
    const navElements = ["🅷🅾🅼🅴", "🅼🅴🅽🆄"];
    for (let i = 0; i < navElements.length; i++) {
        const navLink = document.createElement("li");
        navLink.classList.add("navLink");
        navLink.textContent = navElements[i];


        navLink.addEventListener("click", (e) => {
            root.removeChild(root.childNodes[2]);
            if (e.target.textContent === "🅷🅾🅼🅴") {
                root.appendChild(homePage);
            } else {
                root.appendChild(menuPage);
            }
        })

        navBar.appendChild(navLink);
    }
    return navBar;
}
// const footer = document.createElement("p");
// footer.classList.add("footer");
// footer.textContent = "Copyright © 2021 Ricardo Camacho Mireles";

root.appendChild(buildTitle());
root.appendChild(homePage);
// root.appendChild(footer);