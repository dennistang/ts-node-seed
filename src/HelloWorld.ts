export class HelloWorld {
  constructor(public message: string) {}

  sayHi(): string {
    return this.message + '!';
  }

  sayHiToSomeone(person: string): string {
    return 'Hello ' + person + '!';
  }
}
