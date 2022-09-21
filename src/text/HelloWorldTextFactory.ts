import IHelloWorldText from './IHelloWorldText';
import { HelloWorldTextClass } from './HelloWorldTypes';

/**
 * Factor for instances that implement IHelloWorldText
 */
class HelloWorldTextFactory {
  /**
   * Singleton instance of the factory
   */
  private static _instance : HelloWorldTextFactory = new HelloWorldTextFactory();

  /**
   * Map for the registered classes
   */
  private _classes : Map<string, HelloWorldTextClass> = new Map<string, HelloWorldTextClass>();

  /**
   * Name for the default class
   */
  public DEFAULT_NAME = 'DEFAULT';

  /**
   * Gets the singleton of the factory
   * @returns Singleton of the factory
   */
  public static getInstance(): HelloWorldTextFactory {
    return HelloWorldTextFactory._instance;
  }

  /**
   * Register a new class that implements IHelloWorldText
   * @param name Name of the class
   * @param clazz Class that implements IHelloWorldText
   */
  public register(name: string, clazz:HelloWorldTextClass) : void {
    this._classes.set(name, clazz);
    if (!this._classes.has(this.DEFAULT_NAME)) {
      this._classes.set(this.DEFAULT_NAME, clazz);
    }
  }

  /**
   * Creates a new instance that implements IHelloWorldText
   * @param name Name of the class to be implemented, 
   *             if not provided will be the default class
   * @returns Instance that implements IHelloWorldText
   */
  public createHelloWorldText(name: string = this.DEFAULT_NAME): IHelloWorldText {
    const Clazz = this._classes.get(name);
    if (Clazz === undefined) {
      throw new Error(`Class for "${name}" not found in factory`);
    }
    return new Clazz() as IHelloWorldText;
  }
}

export default HelloWorldTextFactory;
