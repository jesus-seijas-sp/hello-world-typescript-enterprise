import IPrintStrategy from './IPrintStrategy';

/**
 * Type for the settings provided to the constructor of a print strategy
 */
type PrintStrategySettings = any;

/**
 * Type for the class that implements IPrintStrategy and receive settings at the constructor
 */
type PrintStrategyClass = { new (settings: PrintStrategySettings): IPrintStrategy };

export { PrintStrategySettings, PrintStrategyClass };