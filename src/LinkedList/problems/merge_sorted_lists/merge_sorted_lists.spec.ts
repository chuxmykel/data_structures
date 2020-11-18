import { LinkedList } from '../../LinkedList';
import { mergeSortedLists } from './merge_sorted_lists';

describe('mergeSortedLists()', () => {
  it(`Should merge '1,4,5,7,8' and '2,3,6,9,10'`, () => {
    const listA = LinkedList.fromArray([1, 4, 5, 7, 8]);
    const listB = LinkedList.fromArray([2, 3, 6, 9, 10]);
    expect(mergeSortedLists(listA, listB).toString()).toEqual(
      '1,2,3,4,5,6,7,8,9,10',
    );
  });

  it(`Should merge '1,2,3,4,5' and '6,7,8,9,10'`, () => {
    const listA = LinkedList.fromArray([1, 2, 3, 4, 5]);
    const listB = LinkedList.fromArray([6, 7, 8, 9, 10]);
    expect(mergeSortedLists(listA, listB).toString()).toEqual(
      '1,2,3,4,5,6,7,8,9,10',
    );
  });

  it(`Should merge '1,1,4,5,7,8,200' and '2,3,4,6,9,10,48,92'`, () => {
    const listA = LinkedList.fromArray([1, 1, 4, 5, 7, 8, 200]);
    const listB = LinkedList.fromArray([1, 2, 3, 4, 6, 9, 10, 48, 92]);
    expect(mergeSortedLists(listA, listB).toString()).toEqual(
      '1,1,1,2,3,4,4,5,6,7,8,9,10,48,92,200',
    );
  });

  it(`Should merge '10,50,70,90,100' and '20,30,40,60,80'`, () => {
    const listA = LinkedList.fromArray([10, 50, 70, 90, 100]);
    const listB = LinkedList.fromArray([20, 30, 40, 60, 80]);
    expect(mergeSortedLists(listA, listB).toString()).toEqual(
      '10,20,30,40,50,60,70,80,90,100',
    );
  });

  it(`Should merge '1,2,3,4,5,6,7,8,9,10,1234,123456,234543' and ''`, () => {
    const listA = LinkedList.fromArray([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      1234,
      123456,
      234543,
    ]);
    const listB = LinkedList.fromArray([]);
    expect(mergeSortedLists(listA, listB).toString()).toEqual(
      '1,2,3,4,5,6,7,8,9,10,1234,123456,234543',
    );
  });
});
