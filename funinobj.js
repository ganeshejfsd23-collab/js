// Employee objects with function (method)
const emp1 = {
    id: 101,
    name: "Ganesh",
    department: "IT",
    salary: 50000,
    getDetails: function() {
        return `${this.name} works in ${this.department} department with salary ${this.salary}.`;
    },
    yearlySalary: function() {
        return this.salary * 12;
    }
};

const emp2 = {
    id: 102,
    name: "Ravi",
    department: "HR",
    salary: 45000,
    getDetails: function() {
        return `${this.name} works in ${this.department} department with salary ${this.salary}.`;
    },
    yearlySalary: function() {
        return this.salary * 12;
    }
};

const emp3 = {
    id: 103,
    name: "Priya",
    department: "Finance",
    salary: 60000,
    getDetails: function() {
        return `${this.name} works in ${this.department} department with salary ${this.salary}.`;
    },
    yearlySalary: function() {
        return this.salary * 12;
    }
};

const emp4 = {
    id: 104,
    name: "Kiran",
    department: "Marketing",
    salary: 55000,
    getDetails: function() {
        return `${this.name} works in ${this.department} department with salary ${this.salary}.`;
    },
    yearlySalary: function() {
        return this.salary * 12;
    }
};

// Put all employees in an array
const employees = [emp1, emp2, emp3, emp4];

// Use the functions
employees.forEach(emp => {
    console.log(emp.getDetails());
    console.log("Yearly Salary:", emp.yearlySalary());
});