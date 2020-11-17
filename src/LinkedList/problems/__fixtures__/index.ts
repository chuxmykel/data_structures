import { LinkedList, Node } from '../../LinkedList';

export const linkedListWithCycle = new LinkedList();
export const linkedListWithoutCycle = new LinkedList();

for (let i = 0; i < 10; i++) {
  linkedListWithCycle.append(i);
  linkedListWithoutCycle.append(i);
}

// linkedListWithCycle.append(
//   linkedListWithCycle.head?.next?.next?.next,
// );

function createCycle(head: Node, cycleIndex: number) {
  let temp: Node | null = head;
  let count = 0;

  while (count < cycleIndex) {
    if (temp.next) {
      temp = temp.next;
    }
    count++;
  }

  let cyclePoint = temp;

  while (temp.next) {
    temp = temp.next;
  }

  temp.next = cyclePoint;

  return head;
}

if (linkedListWithCycle.head) {
  createCycle(linkedListWithCycle.head, 5);
}
