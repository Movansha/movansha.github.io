document.addEventListener("DOMContentLoaded", () => {

    const file_to_read = "dynamic-items/profiles.json";

    fetch(file_to_read).then(response => response.json())
    .then(data => {

        const container = document.querySelector(".about-me-container > #links");

        data.forEach(item => {
            const link = document.createElement("a");

            const icon = document.createElement("img");
            const title = document.createElement("p");

            // ----------
            
            link.href = item.link;
            link.target = "_blank";
            link.draggable = "true";

            icon.src = item.icon;
            title.textContent = item.title;

            // ----------
            
            link.appendChild(icon);
            link.appendChild(title);

            container.appendChild(link);
        });

    }).catch(error => console.error("Contents in " + file_to_read + " couldn't loaded!", error));
});