function switch_theme() {
    let changed_theme = (localStorage.getItem("theme") == "light") ? "dark" : "light";

    apply_theme(changed_theme);
    localStorage.setItem("theme", changed_theme);
}

function change_language() {
    const current_path = location.pathname;

    if (current_path.startsWith("/tr")) window.location.replace("/tr/");
    else window.location.replace("/en/");
}