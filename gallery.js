
const container = document.getElementById("gallery-container");
const filterButtons = document.querySelectorAll("#filters button");

let currentFilter = "all";

function renderGallery() {
  container.innerHTML = "";
  cards.filter(c => currentFilter === "all" || c.suit === currentFilter)
       .forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    const cardName = card.title.en.toLowerCase().replace(/ /g, "_");
    div.innerHTML = `
      <a href="card.html?name=${cardName}">
        <h2>${card.title.ru} / ${card.title.en}</h2>
        <img src="${card.image}" alt="${card.title.en}" style="max-width: 200px;" />
      </a>
    `;
    container.appendChild(div);
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.getAttribute("data-suit");
    renderGallery();
  });
});

renderGallery();
