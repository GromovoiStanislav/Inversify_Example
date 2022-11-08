import { injectable } from 'inversify';
import { IOutput } from './interfases';

@injectable()
export class CliOutput implements IOutput {
  print(message: string) {
    process.stdout.write(message);
  }
}
