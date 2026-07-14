async function load_projects(lang) {
    let file_to_read;

    if (lang.startsWith("tr")) {
        file_to_read = "/contents/dynamic-items/projects_tr.json";
    }
    else if (lang.startsWith("ru")) {
        file_to_read = "/contents/dynamic-items/projects_ru.json";
    }
    else {
        file_to_read = "/contents/dynamic-items/projects_en.json";
    }

    const response = await fetch(file_to_read);
    const data = await response.json();

    // ----------

    const container = document.querySelector(".projects-container");
    const h1 = container.querySelector("h1");

    container.replaceChildren();
    if (h1) container.appendChild(h1);

    data.forEach(item => {
        const card = document.createElement("a");
            
        const title = document.createElement("h1");
        const icon = document.createElement("img");
        const description = document.createElement("p");

        // ----------
            
        card.href = item.link;
        card.target = "_blank";
        card.draggable = "true";

        title.textContent = item.title;

        icon.src = item.icon;
        icon.alt = "Project icon"
        icon.draggable = false;

        description.textContent = item.description;

        // ----------

        card.appendChild(title);
        card.appendChild(icon);
        card.appendChild(description);

        container.appendChild(card);
    });
}

// ----------

document.addEventListener("DOMContentLoaded", () => load_projects(localStorage.getItem("lang")));