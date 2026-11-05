//* Encapsulation: protect a state and change it through methods.
//* Access Modifier
//? public
//? private
//? protected
//? readonly
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee("Mithun", 32750);
employee1.baseSalary = 88000;
console.log(employee1.baseSalary);
export {};
