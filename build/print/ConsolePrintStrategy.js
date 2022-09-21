"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __importDefault(require("./Color"));
/**
 * Implementation of a print strategy that prints in console with a color
 */
class ConsolePrintStrategy {
    /**
     * Constructor of the class
     * @param color Color to be used. If not defined, default will be white
     */
    constructor(color) {
        /**
         * Private field to store the color
         */
        this._color = Color_1.default.white;
        if (color !== undefined) {
            this._color = color;
        }
    }
    /**
     * Given a text, prints it
     * @param text Text to be printed
     */
    print(text) {
        console.log(`${this._color}%s\x1b[0m`, text);
    }
}
exports.default = ConsolePrintStrategy;
