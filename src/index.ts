import { Dog } from './dog';
import { myContainer } from './inversify.config';
import { TYPES } from './types';

export class DogServise {
  createDog() {
    const dog = myContainer.get<Dog>(TYPES.Dog);
    dog.bark('bow-wow');
  }
}

const dogServise = new DogServise();
dogServise.createDog();
