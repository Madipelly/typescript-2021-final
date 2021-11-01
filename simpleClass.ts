class Animal{
    constructor(public legs:number){}
    conatinLegs(){
        return `Animal Conatin ${this.legs} legs.`
    }
}
class Dog extends Animal{
    conatinLegs(){    
        return `Dog Conatin ${this.legs} legs.`
    }

}
let dg=new Dog(4);
console.log(dg.conatinLegs());
