import { suite, test } from 'mocha-typescript';
import { HelloWorld } from './HelloWorld';

@suite class HelloWorldTestSuite {
  helloWorld: HelloWorld;

  before() {
    this.helloWorld = new HelloWorld('Hello mocha');
  }

  @test sayHi() {
    this.helloWorld.sayHi();
  }

  @test sayHiToSomeone() {
    this.helloWorld.sayHiToSomeone('Jane');
  }
}
