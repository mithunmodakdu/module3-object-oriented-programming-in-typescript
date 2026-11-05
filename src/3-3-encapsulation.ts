//* Encapsulation: protect a state and change it through methods.

//* Access Modifier
//? public
//? private
//? protected

//? readonly

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number
  ){}

  get baseSalary(): number{
    return this._baseSalary;
  }

  

  set baseSalary(newSalary: number){
    if(newSalary < 0){
      throw new Error("Salary cannot be negative value")
    }
    this._baseSalary = newSalary;
  }
}

const employee1 = new Employee("Mithun", 32750);
employee1.baseSalary = 88000
console.log(employee1.baseSalary)


