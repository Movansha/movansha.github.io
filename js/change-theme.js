function switch_theme() {
    let change_theme = (localStorage.getItem("theme") == "light") ? "dark" : "light";
    const button_icon = document.querySelector("#theme-toggle img");

    if (change_theme == "dark") {
        document.documentElement.classList.add("dark");
        button_icon.src = "images/buttons/moon.webp"
        button_icon.alt = "Ay simgesi";
    }

    else {
        document.documentElement.classList.remove("dark");
        button_icon.src = "images/buttons/sun.webp"
        button_icon.alt = "Güneş simgesi";
    }

    localStorage.setItem("theme", change_theme);
}