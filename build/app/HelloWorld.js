"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const print_1 = require("../print");
const text_1 = require("../text");
/**
 * Class for a HelloWorld that implements IHelloWorld
 */
class HelloWorld {
    /**
     * Constructor of the class.
     * Retrieves the instances of the print strategy factory and text factory
     */
    constructor() {
        this._printStrategyFactory = print_1.PrintStrategyFactory.getInstance();
        this._textFactory = text_1.HelloWorldTextFactory.getInstance();
    }
    /**
     * Get the instance of the IPrintStrategy
     * @returns Instance of IPrintStrategy
     */
    getPrintStrategy() {
        return this._printStrategyFactory.createPrintStrategy();
    }
    /**
     * Get the instance of the IHelloWorldText
     * @returns Instance of IHelloWorldText
     */
    getTextGenerator() {
        return this._textFactory.createHelloWorldText();
    }
    /**
     * Gets the Hello World text
     * @returns Hello World text
     */
    getText() {
        const textGenerator = this.getTextGenerator();
        return textGenerator.getText();
    }
    /**
     * Starts the hello world:
     * - Retrieves the hello world text
     * - Retrieves the print strategy
     * - Prints the hello world text using the print strategy
     */
    start() {
        const text = this.getText();
        const printStrategy = this.getPrintStrategy();
        printStrategy.print(text);
    }
}
exports.default = HelloWorld;
