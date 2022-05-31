class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
          this.empName = name;
          this.empCode = code;
  }

  getSalary() : number {
      return 10000;
  }
}
  let emp = new   Employee(10,"Ajay");

  console.log(emp.getSalary());
