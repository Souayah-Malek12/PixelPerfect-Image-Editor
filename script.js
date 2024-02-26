let filterA = document.getElementById("blur");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("hue-rotate");
let filterD = document.getElementById("sepia");

let noFlipBtn = document.getElementById("flip-no");
let flipXBtn = document.getElementById("flip-x");
let flipYBtn = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button");

let image = document.getElementById("choosen-image");

uploadButton.onchange = () => {
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    };
};

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach((slider) => {
    slider.addEventListener("input", addFilter);
});

function addFilter() {
    image.style.filter = `
            blur(${filterA.value}px)
            contrast(${filterB.value}%)
            hue-rotate(${filterC.value}deg)
            sepia(${filterD.value}%)
    `;
    console.log(image.style.filter);
}