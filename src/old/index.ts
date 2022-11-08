import { Dog } from './dog';
import { CliOutput } from './cli-output';

export class DogServise {
  createDog() {
    const output = new CliOutput();
    const dog = new Dog(output);
    dog.bark('wow-bow');
  }
}

const dogServise = new DogServise();
dogServise.createDog();
