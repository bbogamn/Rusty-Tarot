
fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('cardList');
    data.forEach(card => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${card.title}</strong><br>${card.character}<br>${card.arcana} / ${card.suit}`;
      div.onclick = () => window.location.href = `card.html?id=${card.id}`;
      container.appendChild(div);
    });
  });
