document.addEventListener("DOMContentLoaded", () => {

    const file_to_read = "dynamic-items/projects.json";

    fetch(file_to_read).then(response => response.json())
    .then(data => {

        const container = document.querySelector(".projects-container");

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

    }).catch(error => console.error("Contents in " + file_to_read + " couldn't loaded!", error));
});