//* Abstraction

abstract class Employee{
  constructor(
    public name: string,
    protected _baseSalary: number
  ){}

  get baseSalary(){
    return this._baseSalary;
  }

  set baseSalary(newSalary: number){
    if(newSalary < 0){
      throw new Error("Salary can not be negative.");
    }

    this._baseSalary = newSalary;
  }



  // abstract calculatePay(taxRate: number): number{
  //   return this.baseSalary - this.baseSalary * taxRate/100;
  // }

  abstract calculatePay(taxRate: number): number;

  // abstract getResources(): string[];
  // abstract registerEntryTime(): string;
}

class Manager extends Employee{
  calculatePay():number{
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee{
  calculatePay(taxRate: number){
    return this.baseSalary + 5000 -this.baseSalary * taxRate/100;
  }
}

// const employee1 = new Employee("Bakar", 150000)

