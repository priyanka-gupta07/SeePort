const posters = [
    "posters/interstellar.jpg",
    "posters/avengers endgame.jpg",
    "posters/house md.jpg",
    "posters/Howls moving castle.jpg",
    "posters/inception.jpg",
    "posters/my neighbor totoro.jpg",
    "posters/solo leveling.jpg",
    "posters/Vincenzo.jpg"
];


const track = document.getElementById("posterTrack");

const allPosters = [...posters, ...posters];

allPosters.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("poster");
    track.appendChild(img);
});

const movies =[
    {
        id: "Inception",
        title: "Inception",
        poster: "https://www.themoviedb.org/t/p/w1280/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg"

    }
];

const grid = document.querySelector(".movie-grid");

movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
    <img src ="$(movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    `;

    card.addEventListener("click", () => {
        window.location.href = 
        `details.html?id=${movie.id}`;
    });

    grid.appendChild(card);
});