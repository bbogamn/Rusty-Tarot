export function renderCardList(list, lang) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  list.forEach(card => {
    const item = document.createElement('div');
    item.className = 'card-preview';
    item.innerHTML = `
      <img src="/src/assets/${card.img}" alt="${card.name}" loading="lazy">
      <span>${card.name}</span>
    `;
    item.onclick = () => location.href = 'card.html?id=' + card.id;
    container.appendChild(item);
  });
}
