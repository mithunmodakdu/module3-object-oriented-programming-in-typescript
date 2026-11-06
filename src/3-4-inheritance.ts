// Inheritance

class Employee{
  constructor(
    public name: string,
    private _baseSalary: number
  ){}

  set baseSalary(newSalary: number){
    if(newSalary < 0){
      throw new Error("Salary can not be negative.");
    }

    this._baseSalary = newSalary;
  }

  // get baseSalary(){
  //   return this._baseSalary;
  // }

  describe(): string{
    return `${this.name} earns ${this._baseSalary}`
  }
}

class Manager extends Employee{
  // teamMemberCount: number;

  // constructor(
  //   name: string, 
  //   _baseSalary: number, 
  //   teamMemberCount: number){
  //   super(name, _baseSalary);
  //   this.teamMemberCount = teamMemberCount
  // }
  
  constructor(
    name: string, 
    _baseSalary: number, 
    public teamMemberCount: number){
    super(name, _baseSalary);
  }

  describeWork():string{
    return `Manager ${this.name} manages ${this.teamMemberCount} people under him.`
  }
}

const man1 = new Manager("Bakar", 150000, 20)
console.log(man1)
man1.baseSalary = 250000
console.log(man1.describe())
console.log(man1.describeWork())