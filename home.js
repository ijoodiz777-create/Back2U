const searchInput = document.getElementById("itemSearch");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");

function searchItems() {
const keyword = searchInput.value.toLowerCase().trim();
const rows = document.querySelectorAll("#items-table tr");

let matches = 0;

for (let i = 1; i < rows.length; i++) {
const item = rows[i].textContent.toLowerCase();

if (item.includes(keyword)) {
rows[i].style.display = "";
matches++;
} else {
rows[i].style.display = "none";
}
}

if (keyword === "") {
searchResult.textContent = "Showing all sample items.";
searchResult.style.color = "#264b70";
} else if (matches > 0) {
searchResult.textContent = matches + " item(s) found.";
searchResult.style.color = "#264b70";
} else {
searchResult.textContent = "No matching items found.";
searchResult.style.color = "#b45309";
}
}

searchButton.addEventListener("click", searchItems);
searchInput.addEventListener("input", searchItems);

const tipButton = document.getElementById("tipButton");
const tipMessage = document.getElementById("tipMessage");

const imageButton = document.getElementById("imageButton");
const bannerImage = document.querySelector(".banner-image");

let imageEnlarged = false;

// Show or hide a safety tip
function showSafetyTip() {
if (tipMessage.textContent === "") {
tipMessage.textContent =
"If you find a lost item, return it to the campus lost and found office.";

tipButton.textContent = "Hide Safety Tip";
} else {
tipMessage.textContent = "";
tipButton.textContent = "Show Safety Tip";
}
}

// Enlarge or reset the banner image
function changeImageSize() {
if (imageEnlarged === false) {
bannerImage.style.width = "95%";
bannerImage.style.maxWidth = "1200px";

imageButton.textContent = "Original Size";
imageEnlarged = true;
} else {
bannerImage.style.width = "";
bannerImage.style.maxWidth = "";

imageButton.textContent = "Enlarge Image";
imageEnlarged = false;
}
}

// Button events
tipButton.addEventListener("click", showSafetyTip);
imageButton.addEventListener("click", changeImageSize);

