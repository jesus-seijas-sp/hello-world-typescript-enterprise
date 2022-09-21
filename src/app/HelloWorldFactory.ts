import IHelloWorld from './IHelloWorld';
import { HelloWorldClass } from './HelloWorldTypes';

/**
 * Factory for the Hello World implementation.
 * The factory allows several classes that implements IHelloWorld.
 * Also, there is a Default class that can be defined with the name "DEFAULT".
 * The first class to be registered, automatically becomes the default class.
 */
class HelloWorldFactory {
  /**
   * Field for the singleton instance
   */
  private static _instance : HelloWorldFactory = new HelloWorldFactory();

  /**
   * Field for the map of names with classes
   */
  private _classes : Map<string, HelloWorldClass> = new Map<string, HelloWorldClass>();

  /**
   * Name of the defualt class
   */
  public DEFAULT_NAME = 'DEFAULT';

  /**
   * Gets the singleton instance
   * @returns Singleton instance
   */
  public static getInstance(): HelloWorldFactory {
    return HelloWorldFactory._instance;
  }

  /**
   * Register a class that implements IHelloWorld
   * @param name Name of the class
   * @param clazz Class that implements IHelloWorld
   */
  public register(name: string, clazz:HelloWorldClass) : void {
    this._classes.set(name, clazz);
    if (!this._classes.has(this.DEFAULT_NAME)) {
      this._classes.set(this.DEFAULT_NAME, clazz);
    }
  }

  /**
   * Creates a new instance of a class that implements IHelloWorld
   * @param name Name of the class
   * @returns Class that implements IHelloWorld
   */
  public createHelloWorld(name: string = this.DEFAULT_NAME): IHelloWorld {
    const Clazz = this._classes.get(name);
    if (Clazz === undefined) {
      throw new Error(`Class for "${name}" not found in factory`);
    }
    return new Clazz() as IHelloWorld;
  }
}

export default HelloWorldFactory;
