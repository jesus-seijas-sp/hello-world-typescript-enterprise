import { IPrintStrategy } from '../print';

/**
 * Interface for a Hello World application.
 * A Hello World application must have a way to retrieve the print
 * strategy and to generate the text, and a method to start
 */
interface IHelloWorld {
  /**
   * Gets the print strategy
   */
  getPrintStrategy() : IPrintStrategy;
  
  /**
   * Generates the text
   */
  getText(): string;
  
  /**
   * Starts the hello world application
   */
  start() : void;
}

export default IHelloWorld;
