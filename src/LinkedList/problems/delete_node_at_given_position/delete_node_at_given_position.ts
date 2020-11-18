import { LinkedList } from '../../LinkedList';

export function deleteAtPosition(
  list: LinkedList,
  position: number,
): LinkedList {
  let counter = 0;

  if (position === 0) {
    list.deleteHead();
    return list;
  }

  let current = list.head;

  while (current?.next) {
    if (counter === position - 1) {
      current.next = current.next?.next;
      return list;
    }
    current = current.next;
    counter++;
  }
  return list;
}
