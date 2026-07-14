function apply_theme(theme) {
    const theme_icon = document.getElementById("theme-icon");

    if (theme == "dark") {
        document.documentElement.classList.add("dark");
        theme_icon.src = "/images/buttons/moon.webp"
        theme_icon.alt = "Moon icon"; 
    }
    else {
        document.documentElement.classList.remove("dark");
        theme_icon.src = "/images/buttons/sun.webp"
        theme_icon.alt = "Sun icon";
    }
}

// ----------

document.addEventListener("DOMContentLoaded", () => {
    let saved_theme = localStorage.getItem("theme");

    if (saved_theme) apply_theme(saved_theme);
    else {
        localStorage.setItem("theme", "dark");
        apply_theme("dark");
    }
});