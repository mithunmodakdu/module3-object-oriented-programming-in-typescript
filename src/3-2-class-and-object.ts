class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number){
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee1 = new Employee("Mithun", 32750);
console.log(employee1)
console.log(employee1 instanceof Employee)

const employee2 = new Employee("Moni", 50000);
console.log(employee2)
console.log(employee2 instanceof Employee)