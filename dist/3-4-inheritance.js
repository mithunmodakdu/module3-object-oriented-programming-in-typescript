// Inheritance
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
    // get baseSalary(){
    //   return this._baseSalary;
    // }
    describe() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    // teamMemberCount: number;
    // constructor(
    //   name: string, 
    //   _baseSalary: number, 
    //   teamMemberCount: number){
    //   super(name, _baseSalary);
    //   this.teamMemberCount = teamMemberCount
    // }
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `Manager ${this.name} manages ${this.teamMemberCount} people under him.`;
    }
}
const man1 = new Manager("Bakar", 150000, 20);
console.log(man1);
man1.baseSalary = 250000;
console.log(man1.describe());
console.log(man1.describeWork());
export {};
