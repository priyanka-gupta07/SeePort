const params = new URLSearchParams(window.location.search);

const category = params.get("category");
const id = params.get("id");

const backBtn = document.getElementById("backBtn");

if (category === "anime") {
    backBtn.href = "anime.html";
}

else if (category === "indian") {
    backBtn.href = "indian.html";
}

else if (category === "international") {
    backBtn.href = "international.html";
}

else if (category === "kdrama") {
    backBtn.href = "kdrama.html";
}

let mediaList = [];

if (category === "anime") {
    mediaList = animeMedia;
}

else if (category === "indian") {
    mediaList = indianMedia;
}

else if (category === "international") {
    mediaList = internationalMedia;
}

else if (category === "kdrama") {
    mediaList = kdramaMedia;
}

const item = mediaList.find(media => media.id === id);

console.log(category);
console.log(id);
console.log(item);

document.getElementById("detailPoster").src =
    item.poster;

document.getElementById("detailTitle").textContent =
    item.title;

document.getElementById("detailRating").textContent =
    `⭐ ${item.rating}/10`;

document.getElementById("detailSummary").textContent =
    item.summary;

document.getElementById("detailReview").textContent =
    item.review;