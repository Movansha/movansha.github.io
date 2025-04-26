function apply_theme(theme) {
    const button_icon = document.querySelector("#theme-toggle img");

    if (theme == "dark") {
        document.documentElement.classList.add("dark");
        button_icon.src = "images/buttons/moon.webp"
        button_icon.alt = "Ay simgesi"; 
    }

    else {
        document.documentElement.classList.remove("dark");
        button_icon.src = "images/buttons/sun.webp"
        button_icon.alt = "Güneş simgesi";
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