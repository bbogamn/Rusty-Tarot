const container = document.getElementById("cards-container");
const languageSelect = document.getElementById("language-select");
const filterButtons = document.querySelectorAll("#filters button");

let currentLang = "ru";
let currentFilter = "all";

function renderCards() {
    container.innerHTML = "";
    cards.filter(card => currentFilter === "all" || card.suit === currentFilter)
         .forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h2>${card.title[currentLang]}</h2>
            <h3>${card.character[currentLang]}</h3>
            <img src="${card.image}" alt="${card.title[currentLang]}">
            <p><strong>${currentLang === 'ru' ? "Описание" : "Description"}:</strong> ${card.description[currentLang]}</p>
            <p><strong>${currentLang === 'ru' ? "Прямое значение" : "Upright"}:</strong> ${card.upright[currentLang]}</p>
            <p><strong>${currentLang === 'ru' ? "Перевернутое значение" : "Reversed"}:</strong> ${card.reversed[currentLang]}</p>
        `;
        container.appendChild(div);
    });
}

languageSelect.addEventListener("change", () => {
    currentLang = languageSelect.value;
    renderCards();
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-suit");
        renderCards();
    });
});

renderCards();
