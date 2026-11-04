class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee1 = new Employee("Mithun", 32750);
console.log(employee1);
console.log(employee1 instanceof Employee);
const employee2 = new Employee("Moni", 50000);
console.log(employee2);
console.log(employee2 instanceof Employee);
export {};
