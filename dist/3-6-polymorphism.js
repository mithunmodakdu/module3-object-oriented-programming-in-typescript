// Polymorphism
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative.");
        }
        this._baseSalary = newSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate / 100;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.baseSalary + 5000 - this.baseSalary * taxRate / 100;
    }
}
const employee1 = new Employee("Bakar", 150000);
console.log(employee1);
employee1.baseSalary = 250000;
console.log(employee1.calculatePay(10));
const manager1 = new Manager("Mithun", 10000);
console.log(manager1.calculatePay());
const developer1 = new Developer("Mir", 12000, "frontend");
console.log(developer1);
console.log(developer1.calculatePay(10));
export {};
