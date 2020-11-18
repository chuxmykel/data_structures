import { reverseList } from './reverse_a_linked_list';
import { LinkedList } from '../../LinkedList';

describe('reverseList', () => {
  it(`Should reverse '2,3,1,7' to give '7,1,3,2'`, () => {
    const linkedList = LinkedList.fromArray([2, 3, 1, 7]);
    expect(reverseList(linkedList).toString()).toEqual('7,1,3,2');
  });

  it('Should reverse the head to become the tail', () => {
    const linkedList = LinkedList.fromArray([6, 4, 2, 7, 3, 3, 4]);
    const initialHead = linkedList.head?.toString();
    expect(reverseList(linkedList).tail?.toString()).toEqual(initialHead);
  });

  it('Should reverse the tail to become the head', () => {
    const linkedList = LinkedList.fromArray([4, 2, 6, 4, 3, 2, 6, 2]);
    const initiaTail = linkedList.tail?.toString();
    expect(reverseList(linkedList).head?.toString()).toEqual(initiaTail);
  });
});
