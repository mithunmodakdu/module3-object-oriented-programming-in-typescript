// :::  Classes and Objects :::
// Without parameter properties:
// class Student {
//   name: string;
//   age: number;
//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }
//   introduce():void{
//     console.log("My name is " + this.name)
//   }
// }
// const student1 = new Student("Mrinmoyee", 5);
// console.log(student1)
// student1.introduce()
// With parameter properties:
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log("My name is " + this.name);
    }
}
// const student1 = new Student("Mrinmoyee", 5);
// console.log(student1)
// student1.introduce()
// ::: Inheritance – First Pillar of OOP :::
// class Animal{
//   constructor(public name: string){};
//   eat():void{
//     console.log(`${this.name} is eating.`)
//   };
// }
// class Dog extends Animal {
//   constructor(name: string){
//     super(name)
//   }
//   bark():void{
//     console.log(`Dog ${this.name} is barking.`)
//   }
// }
// const dog1 = new Dog("Tommy");
// dog1.bark();
// dog1.eat();
// ::: Polymorphism :::
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}
const animals = [new Dog(), new Cat()];
// console.log(animals)
animals.forEach(animal => animal.makeSound());
export {};
