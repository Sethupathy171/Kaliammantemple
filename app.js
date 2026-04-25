let lang = "ta";

function toggleLang() {
    if (lang === "ta") {
        document.getElementById("title").innerText = "Kaliamman Temple";
        document.getElementById("welcome").innerText = "Welcome";
        document.getElementById("desc").innerText = "Official temple website";
        lang = "en";
    } else {
        document.getElementById("title").innerText = "காளியம்மன் கோவில்";
        document.getElementById("welcome").innerText = "வரவேற்கிறோம்";
        document.getElementById("desc").innerText = "இது காளியம்மன் கோவில் அதிகாரப்பூர்வ இணையதளம்.";
        lang = "ta";
    }
}

/* Image Slider */
let images = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slide").src = images[i];
}, 3000);