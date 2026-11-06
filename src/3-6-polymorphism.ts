// Polymorphism

class Employee{
  constructor(
    public name: string,
    protected _baseSalary: number
  ){}

  set baseSalary(newSalary: number){
    if(newSalary < 0){
      throw new Error("Salary can not be negative.");
    }

    this._baseSalary = newSalary;
  }

  get baseSalary(){
    return this._baseSalary;
  }

  calculatePay(taxRate: number): number{
    return this.baseSalary - this.baseSalary * taxRate/100;
  }
}

class Manager extends Employee{
 override calculatePay():number{
  return this.baseSalary + 5000;
 }
}

class Developer extends Employee{
  constructor(
    name: string,
    _baseSalary: number,
    public type: string
  ){
    super(name, _baseSalary)
  }

  override calculatePay(taxRate: number){
    return this.baseSalary + 5000 -this.baseSalary * taxRate/100;
  }
}

const employee1 = new Employee("Bakar", 150000)
console.log(employee1)
employee1.baseSalary = 250000;
console.log(employee1.calculatePay(10))

const manager1 = new Manager("Mithun", 10000)
console.log(manager1.calculatePay())

const developer1 = new Developer("Mir", 12000, "frontend")
console.log(developer1)
console.log(developer1.calculatePay(10))
