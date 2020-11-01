export class Node {
  private characters: { [key: string]: Node } = {};
  private _isCompleteWord: boolean = false;

  private getNode(char: string): Node {
    return this.characters[char];
  }

  private setNode(char: string, node: Node): void {
    this.characters[char] = node;
  }

  private _add(str: string, index: number): void {
    if (index === str.length) return;

    const current: string = str.charAt(index);

    let child: Node = this.getNode(current);

    if (!child) {
      child = new Node();
      this.setNode(current, child);
    }

    if (index + 1 === str.length) {
      child._isCompleteWord = true;
    }

    // Recursively add each character of the string to the TRIE
    child._add(str, index + 1);
  }

  private _find(str: string, index: number): boolean {
    if (index === str.length) return true;

    const current: string = str.charAt(index);

    let child: Node = this.getNode(current);

    if (!child) {
      return false;
    }

    return child._find(str, index + 1);
  }

  private checkCompleteWord(str: string, index: number): boolean {
    if (index === str.length && this._isCompleteWord) return true;

    const current: string = str.charAt(index);

    let child: Node = this.getNode(current);

    if (!child) {
      return false;
    }

    return child.checkCompleteWord(str, index + 1);
  }

  public add(str: string): void {
    this._add(str, 0);
  }

  public find(str: string): boolean {
    return this._find(str, 0);
  }

  public isCompleteWord(str: string): boolean {
    return this.checkCompleteWord(str, 0);
  }
}
