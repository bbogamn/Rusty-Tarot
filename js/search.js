
const input = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");
const errorBox = document.getElementById("error-message");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";
  errorBox.textContent = "";

  if (query.length < 2) return;

  const matches = cards.filter(c =>
    c.title.ru.toLowerCase().includes(query) ||
    c.title.en.toLowerCase().includes(query) ||
    c.character.ru.toLowerCase().includes(query) ||
    c.character.en.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    errorBox.textContent = "Карта не найдена.";
    return;
  }

  matches.slice(0, 5).forEach(card => {
    const li = document.createElement("li");
    li.textContent = card.title.ru + " / " + card.title.en;
    li.onclick = () => {
      const cardName = card.title.en.toLowerCase().replace(/ /g, "_");
      window.location.href = `card.html?name=${cardName}`;
    };
    suggestionsBox.appendChild(li);
  });
});
