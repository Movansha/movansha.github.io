function change_download_links(lang) {
    const download_jpg = document.getElementById("download-jpg");
    const download_pdf = document.getElementById("download-pdf");
    const download_png = document.getElementById("download-png");

    if (lang.startsWith("tr")) {
        download_jpg.href = "/contents/tr/turkiye-haritasi.jpg";
        download_jpg.download = "Türkiye Haritası.jpg";

        download_pdf.href = "/contents/tr/turkiye-haritasi.pdf";
        download_pdf.download = "Türkiye Haritası.pdf";

        download_png.download = "Türkiye Haritası.png";
    }
    else {
        download_jpg.href = "/contents/en/map-of-turkiye.jpg";
        download_jpg.download = "Map of Türkiye.jpg";

        download_pdf.href = "/contents/en/map-of-turkiye.pdf";
        download_pdf.download = "Map of Türkiye.pdf";

        download_png.download = "Map of Türkiye.png";
    }

    download_png.href = "/contents/turkiye-haritasi.png";
}

document.addEventListener("DOMContentLoaded", () => change_download_links(localStorage.getItem("lang")));