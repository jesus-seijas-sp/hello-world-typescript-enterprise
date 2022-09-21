import IHelloWorldText from './IHelloWorldText';

const DEFAULT_TEXT = 'Hello World';

/**
 * Class for an English Hello World Text generator
 */
class EnglishHelloWorldText implements IHelloWorldText {
  /**
   * Generates a Hello World Text
   * @returns Hello World Text
   */
  public getText(): string {
    return DEFAULT_TEXT;
  }
}

export default EnglishHelloWorldText;