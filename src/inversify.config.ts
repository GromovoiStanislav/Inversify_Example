import 'reflect-metadata';
import { Container } from 'inversify';
import { IOutput } from './interfases';
import { TYPES } from './types';
import { Dog } from './dog';
import { CliOutput } from './cli-output';

const myContainer = new Container();
//myContainer.bind<CliOutput>(TYPES.IOutput).to(CliOutput);
myContainer.bind<IOutput>(TYPES.IOutput).to(CliOutput);
myContainer.bind<Dog>(TYPES.Dog).to(Dog);
export { myContainer };
