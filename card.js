
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    const id = parseInt(getQueryParam('id'));
    const card = data.find(c => c.id === id);
    const container = document.getElementById('cardDetails');
    if (!card) {
      container.innerHTML = '<p>Карта не найдена.</p>';
      return;
    }
    container.innerHTML = `
      <h2>${card.title}</h2>
      <p><strong>Персонаж:</strong> ${card.character}</p>
      <p><strong>Аркан:</strong> ${card.arcana}</p>
      <p><strong>Масть:</strong> ${card.suit}</p>
      <p><strong>Значение:</strong> ${card.meaning_ru}</p>
      <img src="${card.image}" alt="${card.title}" style="max-width:300px; margin-top:20px;" />
    `;
  });
