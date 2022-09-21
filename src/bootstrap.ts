import { HelloWorld } from './app';
import { ConsolePrintStrategy, Color } from './print';
import { EnglishHelloWorldText } from './text';
import HelloWorldConfigurer from './HelloWorldConfigurer';

/**
 * Bootstrap the application initializing the classes in the factories:
 * - Print strategy
 * - Hello World Text generator
 * - Hello World application
 */
function bootstrap(): void {
  HelloWorldConfigurer
    .registerPrintStrategy('WhiteConsolePrint', ConsolePrintStrategy, Color.white)
    .registerTextGenerator('English', EnglishHelloWorldText)
    .registerHelloWorld('HelloWorld', HelloWorld);
}

export default bootstrap;