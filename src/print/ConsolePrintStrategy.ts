import Color from './Color';
import IPrintStrategy from './IPrintStrategy';

/**
 * Implementation of a print strategy that prints in console with a color
 */
class ConsolePrintStrategy implements IPrintStrategy {
  /**
   * Private field to store the color
   */
  private _color : Color = Color.white;

  /**
   * Constructor of the class
   * @param color Color to be used. If not defined, default will be white
   */
  constructor(color: Color | undefined) {
    if (color !== undefined) {
      this._color = color;
    }
  }

  /**
   * Given a text, prints it
   * @param text Text to be printed
   */
  print(text : string) : void {
    console.log(`${this._color}%s\x1b[0m`, text);
  }
}

export default ConsolePrintStrategy;
