import { Node } from '../../LinkedList';
import { hasCycle, detectCycleStartNode } from './cycle_detection';
import { linkedListWithCycle, linkedListWithoutCycle } from '../__fixtures__';

describe('hasCycle()', () => {
  it('Should return true for a linked list with a cycle', () => {
    expect(hasCycle(linkedListWithCycle)).toBeInstanceOf(Node);
  });

  it('Should return false for a linked list without cycle', () => {
    expect(hasCycle(linkedListWithoutCycle)).toBe(false);
  });
});

// describe('detectCycleStartNode()', () => {
//   it('Should detect the cycle start node successfully', () => {
//     expect(
//       detectCycleStartNode(linkedListWithCycle)
//     ).toEqual(
//       linkedListWithCycle.head?.next?.next?.next?.next?.next
//     );
//   });
// });
