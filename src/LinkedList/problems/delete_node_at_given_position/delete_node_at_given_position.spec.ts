import { deleteAtPosition } from './delete_node_at_given_position';
import { LinkedList } from '../../LinkedList';

describe('deleteAtPosition()', () => {
  let linkedList: LinkedList | undefined;
  beforeEach(() => {
    linkedList = LinkedList.fromArray(['8', '2', '3', '1', '7']);
  });

  it('Should delete the node at position 0', () => {
    if (linkedList) {
      expect(deleteAtPosition(linkedList, 0).toString()).toEqual('2,3,1,7');
    }
  });

  it('Should delete the node at position 1', () => {
    if (linkedList) {
      expect(deleteAtPosition(linkedList, 1).toString()).toEqual('8,3,1,7');
    }
  });

  it('Should delete the node at position 2', () => {
    if (linkedList) {
      expect(deleteAtPosition(linkedList, 2).toString()).toEqual('8,2,1,7');
    }
  });

  it('Should delete the node at position 3', () => {
    if (linkedList) {
      expect(deleteAtPosition(linkedList, 3).toString()).toEqual('8,2,3,7');
    }
  });

  it('Should delete the node at position 4', () => {
    if (linkedList) {
      expect(deleteAtPosition(linkedList, 4).toString()).toEqual('8,2,3,1');
    }
  });
});
