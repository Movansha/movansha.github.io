function apply_theme(theme) {
    const button_icon = document.getElementById("theme-icon");

    if (theme == "dark") {
        document.documentElement.classList.add("dark");
        button_icon.src = "/images/buttons/moon.webp"
        button_icon.alt = "Moon icon"; 
    }

    else {
        document.documentElement.classList.remove("dark");
        button_icon.src = "/images/buttons/sun.webp"
        button_icon.alt = "Sun icon";
    }
}

// ----------

document.addEventListener("DOMContentLoaded", () => {
    let saved_theme = localStorage.getItem("theme");

    if (saved_theme) {
        apply_theme(saved_theme);
    }

    else {
        if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            apply_theme("dark");
            localStorage.setItem("theme", "dark");
        }

        else {
            apply_theme("light");
            localStorage.setItem("theme", "light");
        }
    }
});