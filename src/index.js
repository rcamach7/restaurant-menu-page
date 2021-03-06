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
    logo.textContent = "π»π°ππ π±πΎπ";
    logo.classList.add("logo");


    titleContainer.appendChild(logo);
    titleContainer.appendChild(buildNav());

    return titleContainer;
}

function buildNav() {
    const navBar = document.createElement("nav");
    navBar.classList.add("navContainer");
    const navElements = ["π·πΎπΌπ΄", "πΌπ΄π½π"];
    for (let i = 0; i < navElements.length; i++) {
        const navLink = document.createElement("li");
        navLink.classList.add("navLink");
        navLink.textContent = navElements[i];


        navLink.addEventListener("click", (e) => {
            root.removeChild(root.childNodes[2]);
            if (e.target.textContent === "π·πΎπΌπ΄") {
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
// footer.textContent = "Copyright Β© 2021 Ricardo Camacho Mireles";

root.appendChild(buildTitle());
root.appendChild(homePage);
// root.appendChild(footer);