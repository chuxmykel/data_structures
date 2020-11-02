import { Stack } from '../';

type OpenChar = '{' | '[' | '<' | '(';

type CloseChar = '}' | ']' | '>' | ')';

export type Surround = OpenChar | CloseChar;

const parenPairs: Surround[][] = [
  ['{', '}'],
  ['[', ']'],
  ['<', '>'],
  ['(', ')'],
];

export function isOpenTerm(char: Surround): boolean {
  for (let i = 0; i < parenPairs.length; i++) {
    if (char === parenPairs[i][0]) {
      return true;
    }
  }
  return false;
}

export function matches(openChar: Surround, closeChar: Surround): boolean {
  for (let i = 0; i < parenPairs.length; i++) {
    if (parenPairs[i][0] === openChar) {
      return parenPairs[i][1] === closeChar;
    }
  };
  return false;
}

export function isBalanced(expression: Surround): boolean {
  const stack: Stack<Surround> = new Stack();

  for (let c of expression) {
    const char = <Surround>c;
    if (isOpenTerm(char)) {
      stack.push(char);
    } else {
      if (stack.isEmpty || !matches(stack.pop(), char)) {
        return false;
      }
    }
  }

  return true;
}
