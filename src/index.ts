// import words from 'an-array-of-english-words';
import { Node as Trie } from './tries';
import { LinkedList } from './linked_list';

const trie: Trie = new Trie();
const linkedList: LinkedList = new LinkedList();

/**
 * Trie related stuff
 * Uncomment to implement
 
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

*/

linkedList.append(20);
linkedList.append({ name: 'trash' });
linkedList.prepend('Yaaaay');
linkedList.prepend('Hallelujah');
linkedList.append('Lets')

console.log(linkedList.toArray());
console.log(linkedList.head?.next?.next?.data); // 20 
console.log(linkedList.head?.data); // Hallelujah
