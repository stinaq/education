function MonthlySalary (){}

MonthlySalary.prototype.getSalary = function () {
  return this.salary * 12;
 };

function HourlySalary () {}

HourlySalary.prototype.getSalary = function (hours) {
    return this.salary * hours * 12;
  }

function EmployeeInformation () {
 this.getFullName = function () {
  return this.firstName + this.lastName;
 }
}

function MonthlyEmployee (firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
}

function HourlyEmployee (firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
}


$.extend(true, MonthlyEmployee.prototype, MonthlySalary.prototype, EmployeeInformation.prototype);
$.extend(true, HourlyEmployee.prototype, HourlySalary.prototype, EmployeeInformation.prototype);

var stina = new MonthlyEmployee('Stina', 'Kronberg', 28000);
var salary1 = stina.getSalary();

var erik = new HourlyEmployee('Erik', 'Qvarnström', 700);
var salary2 = erik.getSalary(50);

console.log(salary1);
console.log(salary2);