import { LinkedList } from '../../LinkedList';

export function mergeSortedLists(
  listA: LinkedList,
  listB: LinkedList,
): LinkedList {
  if (listA.isEmpty) {
    return listB;
  }
  if (listB.isEmpty) {
    return listA;
  }

  const sortedList = new LinkedList();
  let pointerA = listA.head;
  let pointerB = listB.head;

  while (pointerA && pointerB) {
    if (pointerA.data < pointerB.data || pointerA.data === pointerB.data) {
      sortedList.append(pointerA);
      pointerA = pointerA.next;
      if (!pointerA) {
        while (pointerB) {
          sortedList.append(pointerB);
          pointerB = pointerB.next;
        }
      }
    } else {
      sortedList.append(pointerB);
      pointerB = pointerB.next;
      if (!pointerB) {
        while (pointerA) {
          sortedList.append(pointerA);
          pointerA = pointerA.next;
        }
      }
    }
  }
  return sortedList;
}
