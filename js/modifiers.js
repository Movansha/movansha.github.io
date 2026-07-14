function switch_theme() {
    let changed_theme = (localStorage.getItem("theme") == "light") ? "dark" : "light";
    localStorage.setItem("theme", changed_theme);

    apply_theme(changed_theme);
}

function change_lang() {
    let changed_lang;

    if (localStorage.getItem("lang").startsWith("en")) {
        changed_lang = "ru";
    } else if (localStorage.getItem("lang").startsWith("ru")) {
        changed_lang = "tr";
    } else {
        changed_lang = "en";
    }

    localStorage.setItem("lang", changed_lang);

    load_projects(changed_lang);
    change_download_links(changed_lang);
    load_lang(changed_lang);
}