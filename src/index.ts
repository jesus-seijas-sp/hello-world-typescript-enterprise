import bootstrap  from './bootstrap';
import { IHelloWorld, HelloWorldFactory } from './app';

function main() : void {
  bootstrap();
  const factory : HelloWorldFactory = HelloWorldFactory.getInstance();
  const instance : IHelloWorld = factory.createHelloWorld();
  instance.start();
}

main();