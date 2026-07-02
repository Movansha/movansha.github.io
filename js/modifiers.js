function switch_theme() {
    let changed_theme = (localStorage.getItem("theme") == "light") ? "dark" : "light";
    localStorage.setItem("theme", changed_theme);

    apply_theme(changed_theme);
}

function change_lang() {
    let changed_lang = (localStorage.getItem("lang").startsWith("tr")) ? "en" : "tr";
    localStorage.setItem("lang", changed_lang);

    load_projects(changed_lang);
    change_download_links(changed_lang);
    load_lang(changed_lang);
}