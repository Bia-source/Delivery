export class Providers{
    useCase: any;
    constructor(useCase){
        this.useCase = new useCase();     
    }
}