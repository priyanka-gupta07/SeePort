

const grid = document.querySelector(".media-grid");

kdramaMedia.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("media-card");

    card.innerHTML = `
    <img src ="${item.poster}" alt="${item.title}">
    <h3>${item.title}</h3>
    `;

    card.addEventListener("click", () => {
        window.location.href = 
        `details.html?category=kdrama&id=${item.id}`;
    });

    grid.appendChild(card);
});