const BASE_PATH = '/kannada-dataset';

let cache = {};

async function loadJSON(filename) {
  if (cache[filename]) return cache[filename];
  const response = await fetch(`${BASE_PATH}/${filename}`);
  if (!response.ok) throw new Error(`Failed to load ${filename}: ${response.statusText}`);
  const data = await response.json();
  cache[filename] = data;
  return data;
}

export async function getVowels() {
  const data = await loadJSON('vowels.json');
  return data.filter(item => item.type === 'letter' && item.category === 'vowel');
}

export async function getConsonants() {
  const data = await loadJSON('consonants.json');
  return data.filter(item => item.type === 'letter' && item.category === 'consonant');
}

export async function getVowelCombinations() {
  const data = await loadJSON('vowel_sign_combinations.json');
  return data.filter(item => item.type === 'letter' && item.category === 'vowel_combination');
}

export async function getConjuncts() {
  const data = await loadJSON('conjuncts.json');
  return data.filter(item => item.type === 'letter' && item.category === 'conjunct');
}

export async function getNumbers() {
  return await loadJSON('numbers.json');
}

export async function getAllLetters() {
  const [vowels, consonants, vowelCombinations, conjuncts, numbers] = await Promise.all([
    getVowels(),
    getConsonants(),
    getVowelCombinations(),
    getConjuncts(),
    getNumbers()
  ]);
  return [
    { section: 'vowels', title: 'Independent Vowels (ಸ್ವರಗಳು)', data: vowels },
    { section: 'consonants', title: 'Consonants (ವ್ಯಂಜನಗಳು)', data: consonants },
    { section: 'vowelCombinations', title: 'Vowel Sign Combinations (ಗುಣಿತಾಕ್ಷರ)', data: vowelCombinations },
    { section: 'conjuncts', title: 'Conjunct Letters (ಒತ್ತಕ್ಷರ)', data: conjuncts },
    { section: 'numbers', title: 'Kannada Numbers (ಅಂಕಿಗಳು)', data: numbers }
  ];
}

export async function search(query) {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  const all = await getAllLetters();
  const results = [];
  for (const section of all) {
    for (const item of section.data) {
      const letter = (item.letter || item.number || '').toLowerCase();
      const roman = (item.roman || '').toLowerCase();
      const meaning = (item.meaning || '').toLowerCase();
      const word = (item.word || '').toLowerCase();
      if (letter.includes(q) || roman.includes(q) || meaning.includes(q) || word.includes(q)) {
        results.push({ ...item, _section: section.title });
      }
    }
  }
  return results;
}

export function clearCache() {
  cache = {};
}