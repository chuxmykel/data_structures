import { LinkedList } from '../../LinkedList';

export function hasCycle(linkedList: LinkedList) {
  let slowPointer = linkedList.head;
  let fastPointer = linkedList.head?.next;

  while (fastPointer && slowPointer) {
    if (fastPointer === slowPointer) {
      return fastPointer;
    }
    fastPointer = fastPointer?.next?.next;
    slowPointer = slowPointer.next;
  }

  return false;
}

export function detectCycleStartNode(linkedList: LinkedList) {}
