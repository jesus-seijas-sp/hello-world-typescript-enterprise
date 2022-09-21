import IHelloWorld from './IHelloWorld';
import { IPrintStrategy, PrintStrategyFactory } from '../print';
import { HelloWorldTextFactory, IHelloWorldText } from '../text';

/**
 * Class for a HelloWorld that implements IHelloWorld
 */
class HelloWorld implements IHelloWorld {
  /**
   * Field for the print strategy factory
   */
  private _printStrategyFactory : PrintStrategyFactory;

  /**
   * Field for the text factory
   */
  private _textFactory : HelloWorldTextFactory;

  /**
   * Constructor of the class.
   * Retrieves the instances of the print strategy factory and text factory
   */
  constructor()    {
    this._printStrategyFactory = PrintStrategyFactory.getInstance();
    this._textFactory = HelloWorldTextFactory.getInstance();
  }

  /**
   * Get the instance of the IPrintStrategy
   * @returns Instance of IPrintStrategy
   */
  public getPrintStrategy() : IPrintStrategy {
    return this._printStrategyFactory.createPrintStrategy();
  }

  /**
   * Get the instance of the IHelloWorldText
   * @returns Instance of IHelloWorldText
   */
  public getTextGenerator() : IHelloWorldText {
    return this._textFactory.createHelloWorldText();
  }

  /**
   * Gets the Hello World text
   * @returns Hello World text
   */
  public getText() : string {
    const textGenerator : IHelloWorldText = this.getTextGenerator();
    return textGenerator.getText();
  }

  /**
   * Starts the hello world:
   * - Retrieves the hello world text
   * - Retrieves the print strategy
   * - Prints the hello world text using the print strategy
   */
  public start(): void {
    const text: string = this.getText();
    const printStrategy: IPrintStrategy = this.getPrintStrategy();
    printStrategy.print(text);
  }
}

export default HelloWorld;