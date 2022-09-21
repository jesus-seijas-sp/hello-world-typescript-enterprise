"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const print_1 = require("./print");
const text_1 = require("./text");
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
    static registerPrintStrategy(name, strategy, settings) {
        const factory = print_1.PrintStrategyFactory.getInstance();
        factory.registerStrategy(name, strategy, settings);
        return HelloWorldConfigurer;
    }
    /**
     * Register a Hello World Text Generator
     * @param name Name of the text generator
     * @param generator Class of the text generator
     * @returns HelloWorldConfigure class for fluent
     */
    static registerTextGenerator(name, generator) {
        const factory = text_1.HelloWorldTextFactory.getInstance();
        factory.register(name, generator);
        return HelloWorldConfigurer;
    }
    /**
     * Register a Hello World class
     * @param name Name of the class
     * @param helloWorld Class of the hello world
     * @returns HelloWorldConfigure class for fluent
     */
    static registerHelloWorld(name, helloWorld) {
        const factory = app_1.HelloWorldFactory.getInstance();
        factory.register(name, helloWorld);
        return HelloWorldConfigurer;
    }
}
exports.default = HelloWorldConfigurer;
