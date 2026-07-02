async function load_lang(lang) {
    let lang_file;
    const lang_icon = document.getElementById("lang-icon");

    if (lang.startsWith("tr")) {
        lang_file = "/langs/tr.json";
        lang_icon.src = "/images/buttons/usa.webp"
        lang_icon.alt = "Türkiye flag"; 
    } else {
        lang_file = "/langs/en.json";
        lang_icon.src = "/images/buttons/turkiye.webp"
        lang_icon.alt = "USA flag";
    }

    // ----------

    const response = await fetch(lang_file);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        let value = element.dataset.i18n.split('.').reduce((current, key) => {
            return current?.[key];
        }, translations);

        if (Array.isArray(value)) value = value.join(" ");

        if (value != undefined) {
            if (element.tagName == "TITLE") {
                document.title = value;
            } else {
                element.textContent = value;
            }
        }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        let value = element.dataset.i18nTitle.split('.').reduce((current, key) => {
            return current?.[key];
        }, translations);

        if (Array.isArray(value)) value = value.join(" ");

        if (value != undefined) element.title = value;
    });
}

load_lang(localStorage.getItem("lang"));