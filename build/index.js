"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = __importDefault(require("./bootstrap"));
const app_1 = require("./app");
function main() {
    (0, bootstrap_1.default)();
    const factory = app_1.HelloWorldFactory.getInstance();
    const instance = factory.createHelloWorld();
    instance.start();
}
main();
