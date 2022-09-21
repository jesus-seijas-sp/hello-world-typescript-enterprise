"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintStrategyFactory = exports.ConsolePrintStrategy = exports.Color = void 0;
const Color_1 = __importDefault(require("./Color"));
exports.Color = Color_1.default;
const ConsolePrintStrategy_1 = __importDefault(require("./ConsolePrintStrategy"));
exports.ConsolePrintStrategy = ConsolePrintStrategy_1.default;
const PrintStrategyFactory_1 = __importDefault(require("./PrintStrategyFactory"));
exports.PrintStrategyFactory = PrintStrategyFactory_1.default;
