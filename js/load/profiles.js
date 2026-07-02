async function load_profiles() {
    const file_to_read = "/contents/dynamic-items/profiles.json";

    const response = await fetch(file_to_read);
    const data = await response.json();
    
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
        icon.draggable = false;
            
        title.textContent = item.title;

        // ----------
            
        link.appendChild(icon);
        link.appendChild(title);

        container.appendChild(link);
    });
}

document.addEventListener("DOMContentLoaded", () => load_profiles());