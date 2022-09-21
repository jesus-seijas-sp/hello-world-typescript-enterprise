import IPrintStrategy from './IPrintStrategy';
import { PrintStrategySettings, PrintStrategyClass } from './PrintStrategyTypes';

/**
 * Data for a print strategy:
 * - strategy: a class where the constructor receive a settings object,
 * 						 and the class implements IPrintStrategy
 * - settings: object to ve provided at the constructor of the class
 */
type PrintStrategyData = {
  strategy: PrintStrategyClass,
  settings: PrintStrategySettings
};

/**
 * Factory for the Print Strategy.
 * The factory allows several classes with settings to be defined by name, so an 
 * instance of the class can be retrieved by name.
 * Also, there is a Default class that can be defined with the name "DEFAULT".
 * The first strategy to be registered, automatically becomes the default class.
 */
class PrintStrategyFactory {
  /**
	 * Singleton for the PrintStrategyFactory
	 */
  private static _instance : PrintStrategyFactory = new PrintStrategyFactory();

  /**
	 * Map of strategies registered at the factory
	 */
  private _strategies : Map<string, PrintStrategyData> = new Map<string, PrintStrategyData>();

  /**
	 * Name for the default strategy
	 */
  public DEFAULT_NAME = 'DEFAULT';

  /**
	 * Gets the singleton instance
	 * @returns The singleton PrintStrategyFactory
	 */
  public static getInstance(): PrintStrategyFactory {
    return PrintStrategyFactory._instance;
  }

  /**
	 * Register an strategy for printing
	 * @param name Name of the strategy
	 * @param strategy Class for the strategy
	 * @param settings Settings to be provided to the constructor of the class
	 */
  public registerStrategy(name: string, strategy: PrintStrategyClass, settings: PrintStrategySettings) : void {
    this._strategies.set(name, { strategy, settings });
    if (!this._strategies.has(this.DEFAULT_NAME)) {
      this._strategies.set(this.DEFAULT_NAME, { strategy, settings });
    }
  }

  /**
	 * Creates a new instance of an strategy, given the name.
	 * @param name Name of the strategy, if not provided used the default
	 * @returns New instance of the strategy
	 */
  public createPrintStrategy(name: string = this.DEFAULT_NAME): IPrintStrategy {
    const strategyData = this._strategies.get(name);
    if (strategyData === undefined) {
      throw new Error(`Class for "${name}" not found in factory`);
    }
    const { strategy : Clazz, settings } = strategyData;
    return new Clazz(settings) as IPrintStrategy;
  }
}

export default PrintStrategyFactory;