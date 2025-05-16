const themes = Array.from({ length: 12 }, (_, i) => `theme${i + 1}`);
const themeContainer = document.getElementById("theme-container");
const imageViewer = document.getElementById("image-viewer");
const currentImage = document.getElementById("current-image");

let currentTheme = null;
let imageIndex = 0;

function showThemes() {
  themes.forEach((theme) => {
    const btn = document.createElement("button");
    btn.className = "theme-button";
    btn.textContent = theme;
    btn.onclick = () => selectTheme(theme);
    themeContainer.appendChild(btn);
  });
}

function selectTheme(theme) {
  currentTheme = theme;
  imageIndex = 1;
  themeContainer.classList.add("hidden");
  imageViewer.classList.remove("hidden");
  showImage();
}

function showImage() {
  if (imageIndex > 30) {
    alert("Fin des images !");
    location.reload();
    return;
  }

  currentImage.src = `assets/themes/${currentTheme}/${imageIndex}.jpg`;
  imageIndex++;
}

currentImage.addEventListener("click", showImage);

showThemes();
