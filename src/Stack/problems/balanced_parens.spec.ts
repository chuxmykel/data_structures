import { isBalanced, matches, isOpenTerm, Surround } from './balanced_parens';

const parenPairs: Surround[][] = [
  ['{', '}'],
  ['[', ']'],
  ['<', '>'],
  ['(', ')'],
];

describe('isBalanced()', () => {
  it('{{}}[][{{}()}]', () => {
    expect(isBalanced(<Surround>'{{}}[][{{}()}]')).toBe(true);
  });

  it('{}{{]{}}<(>', () => {
    expect(isBalanced(<Surround>'{}{{]{}}<(>')).toBe(false);
  });

  it('((]', () => {
    expect(isBalanced(<Surround>'((]')).toBe(false);
  });

  it('(([]{<>}([<<>>])))', () => {
    expect(isBalanced(<Surround>'(([]{<>}([<<>>])))')).toBe(true);
  });

  it('(())', () => {
    expect(isBalanced(<Surround>'(())')).toBe(true);
  });
});

describe('isOpenTerm()', () => {

  it('Returns true for open characters', () => {
    parenPairs.forEach(parenPair => {
      expect(isOpenTerm(parenPair[0])).toBe(true);
    });
  });

  it('Returns false for close characters', () => {
    parenPairs.forEach(parenPair => {
      expect(isOpenTerm(parenPair[1])).toBe(false);
    });
  });
});

describe('matches()', () => {
  it('Returns true for matching surround characters', () => {
    parenPairs.forEach(parenPair => {
      expect(matches(parenPair[0], parenPair[1])).toBe(true);
    });
  });

  it('Returns false for non matching surround characters', () => {
    parenPairs.forEach(parenPair => {
      for (let i = 0; i < parenPairs.length; i++) {
        expect(matches(parenPair[0], parenPairs[i][0])).toBe(false);
      }
    });
  });
});
