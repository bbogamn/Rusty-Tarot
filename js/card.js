
const container = document.getElementById("card-detail");
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const card = cards.find(c =>
  c.title.en.toLowerCase().replace(/ /g, "_") === name
);

if (!card) {
  container.innerHTML = "<p>Карта не найдена.</p>";
} else {
  container.innerHTML = `
    <div class="card">
      <h2>${card.title.ru} / ${card.title.en}</h2>
      <h3>${card.character.ru} / ${card.character.en}</h3>
      <img src="${card.image}" alt="${card.title.en}" style="max-width: 300px;" />
      <p><strong>Описание:</strong> ${card.description.ru}</p>
      <p><strong>Прямое значение:</strong> ${card.upright.ru}</p>
      <p><strong>Перевернутое значение:</strong> ${card.reversed.ru}</p>
    </div>
  `;
}
