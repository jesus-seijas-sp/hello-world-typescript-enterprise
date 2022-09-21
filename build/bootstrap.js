"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const print_1 = require("./print");
const text_1 = require("./text");
const HelloWorldConfigurer_1 = __importDefault(require("./HelloWorldConfigurer"));
/**
 * Bootstrap the application initializing the classes in the factories:
 * - Print strategy
 * - Hello World Text generator
 * - Hello World application
 */
function bootstrap() {
    HelloWorldConfigurer_1.default
        .registerPrintStrategy('WhiteConsolePrint', print_1.ConsolePrintStrategy, print_1.Color.white)
        .registerTextGenerator('English', text_1.EnglishHelloWorldText)
        .registerHelloWorld('HelloWorld', app_1.HelloWorld);
}
exports.default = bootstrap;
