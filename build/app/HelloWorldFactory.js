"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Factory for the Hello World implementation.
 * The factory allows several classes that implements IHelloWorld.
 * Also, there is a Default class that can be defined with the name "DEFAULT".
 * The first class to be registered, automatically becomes the default class.
 */
class HelloWorldFactory {
    constructor() {
        /**
         * Field for the map of names with classes
         */
        this._classes = new Map();
        /**
         * Name of the defualt class
         */
        this.DEFAULT_NAME = 'DEFAULT';
    }
    /**
     * Gets the singleton instance
     * @returns Singleton instance
     */
    static getInstance() {
        return HelloWorldFactory._instance;
    }
    /**
     * Register a class that implements IHelloWorld
     * @param name Name of the class
     * @param clazz Class that implements IHelloWorld
     */
    register(name, clazz) {
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
    createHelloWorld(name = this.DEFAULT_NAME) {
        const Clazz = this._classes.get(name);
        if (Clazz === undefined) {
            throw new Error(`Class for "${name}" not found in factory`);
        }
        return new Clazz();
    }
}
/**
 * Field for the singleton instance
 */
HelloWorldFactory._instance = new HelloWorldFactory();
exports.default = HelloWorldFactory;
