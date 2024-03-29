import {injectable, inject} from 'inversify'
import {IOutput} from './interfases'
import {TYPES} from './types'

@injectable()
export class Dog{
    constructor(@inject(TYPES.IOutput) private output:IOutput){}
    bark(message:string){
        this.output.print(message)
    }
}