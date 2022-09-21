import { HelloWorldFactory, IHelloWorld } from './app';
import { PrintStrategyFactory, PrintStrategyClass, PrintStrategySettings } from './print';
import { HelloWorldTextFactory, IHelloWorldText } from './text';

/**
 * Static class to configure the Hello World:
 * - Register the print strategies
 * - Register the hello world text generators
 * - Register the hello world class
 */
class HelloWorldConfigurer {
  /**
   * Register a print strategy
   * @param name Name of the strategy
   * @param strategy Class of the strategy
   * @param settings Settings for the constructor of the strategy
   * @returns HelloWorldConfigure class for fluent
   */
  public static registerPrintStrategy(name: string, strategy: PrintStrategyClass, settings: PrintStrategySettings): typeof HelloWorldConfigurer {
    const factory : PrintStrategyFactory = PrintStrategyFactory.getInstance();
    factory.registerStrategy(name, strategy, settings);
    return HelloWorldConfigurer;
  }

  /**
   * Register a Hello World Text Generator
   * @param name Name of the text generator
   * @param generator Class of the text generator
   * @returns HelloWorldConfigure class for fluent
   */
  public static registerTextGenerator(name: string, generator: { new (): IHelloWorldText }) : typeof HelloWorldConfigurer {
    const factory: HelloWorldTextFactory = HelloWorldTextFactory.getInstance();
    factory.register(name, generator);
    return HelloWorldConfigurer;
  }

  /**
   * Register a Hello World class
   * @param name Name of the class
   * @param helloWorld Class of the hello world
   * @returns HelloWorldConfigure class for fluent
   */
  public static registerHelloWorld(name: string, helloWorld: { new (): IHelloWorld }): typeof HelloWorldConfigurer {
    const factory: HelloWorldFactory = HelloWorldFactory.getInstance();
    factory.register(name, helloWorld);
    return HelloWorldConfigurer;
  }
}

export default HelloWorldConfigurer;