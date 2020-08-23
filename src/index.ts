import words from 'an-array-of-english-words';
import { Node as Trie } from './tries';

const trie = new Trie();

words.forEach(word => {
  trie.add(word);
});

[
  't',
  'tre',
  'tree',
  'trx',
  'trash',
  'ace',
  'straw',
  'chukwudi',
  'kalu',
  'james',
  'njoku',
  'favour',
  'favor',
  'flavour',
  'football',
].forEach(word => {
  console.log(`${word}: `, trie.isCompleteWord(word));
});
