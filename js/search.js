
fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');

    input.addEventListener('input', () => {
      const value = input.value.toLowerCase();
      suggestions.innerHTML = '';
      if (value.length === 0) return;
      const matches = data.filter(card =>
        card.title.toLowerCase().includes(value) ||
        card.character.toLowerCase().includes(value)
      ).slice(0, 10);

      matches.forEach(card => {
        const li = document.createElement('li');
        li.textContent = card.title + ' — ' + card.character;
        li.onclick = () => window.location.href = `card.html?id=${card.id}`;
        suggestions.appendChild(li);
      });
    });
  });
