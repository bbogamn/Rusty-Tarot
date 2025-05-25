import enCards from './data/cards.en.json';
import ruCards from './data/cards.ru.json';
import { renderCardList } from './components/CardPreview.js';

const $q = document.getElementById('search');
const lang = navigator.language.startsWith('ru') ? 'ru' : 'en';
const cards = lang === 'ru' ? ruCards : enCards;

function search(q) {
  const query = q.toLowerCase().trim();
  const matches = Object.entries(cards)
    .filter(([, card]) =>
      card.name.toLowerCase().includes(query) ||
      card.keywords.some(k => k.toLowerCase().includes(query))
    )
    .map(([id, card]) => ({ id, ...card }));
  renderCardList(matches, lang);
}

$q.addEventListener('input', e => search(e.target.value));
search('');
