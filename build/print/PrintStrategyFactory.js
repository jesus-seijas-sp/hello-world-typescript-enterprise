"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Factory for the Print Strategy.
 * The factory allows several classes with settings to be defined by name, so an
 * instance of the class can be retrieved by name.
 * Also, there is a Default class that can be defined with the name "DEFAULT".
 * The first strategy to be registered, automatically becomes the default class.
 */
class PrintStrategyFactory {
    constructor() {
        /**
           * Map of strategies registered at the factory
           */
        this._strategies = new Map();
        /**
           * Name for the default strategy
           */
        this.DEFAULT_NAME = 'DEFAULT';
    }
    /**
       * Gets the singleton instance
       * @returns The singleton PrintStrategyFactory
       */
    static getInstance() {
        return PrintStrategyFactory._instance;
    }
    /**
       * Register an strategy for printing
       * @param name Name of the strategy
       * @param strategy Class for the strategy
       * @param settings Settings to be provided to the constructor of the class
       */
    registerStrategy(name, strategy, settings) {
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
    createPrintStrategy(name = this.DEFAULT_NAME) {
        const strategyData = this._strategies.get(name);
        if (strategyData === undefined) {
            throw new Error(`Class for "${name}" not found in factory`);
        }
        const { strategy: Clazz, settings } = strategyData;
        return new Clazz(settings);
    }
}
/**
   * Singleton for the PrintStrategyFactory
   */
PrintStrategyFactory._instance = new PrintStrategyFactory();
exports.default = PrintStrategyFactory;
