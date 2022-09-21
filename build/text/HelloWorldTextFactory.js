"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Factor for instances that implement IHelloWorldText
 */
class HelloWorldTextFactory {
    constructor() {
        /**
         * Map for the registered classes
         */
        this._classes = new Map();
        /**
         * Name for the default class
         */
        this.DEFAULT_NAME = 'DEFAULT';
    }
    /**
     * Gets the singleton of the factory
     * @returns Singleton of the factory
     */
    static getInstance() {
        return HelloWorldTextFactory._instance;
    }
    /**
     * Register a new class that implements IHelloWorldText
     * @param name Name of the class
     * @param clazz Class that implements IHelloWorldText
     */
    register(name, clazz) {
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
    createHelloWorldText(name = this.DEFAULT_NAME) {
        const Clazz = this._classes.get(name);
        if (Clazz === undefined) {
            throw new Error(`Class for "${name}" not found in factory`);
        }
        return new Clazz();
    }
}
/**
 * Singleton instance of the factory
 */
HelloWorldTextFactory._instance = new HelloWorldTextFactory();
exports.default = HelloWorldTextFactory;
