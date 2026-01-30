// Creating multiple employee objects using object literals
const emp1 = {
    id: 101,
    name: "Ganesh",
    department: "IT",
    salary: 50000,
    isPermanent: true
};

const emp2 = {
    id: 102,
    name: "Ravi",
    department: "HR",
    salary: 45000,
    isPermanent: false
};

const emp3 = {
    id: 103,
    name: "Priya",
    department: "Finance",
    salary: 60000,
    isPermanent: true
};

const emp4 = {
    id: 104,
    name: "Kiran",
    department: "Marketing",
    salary: 55000,
    isPermanent: true
};

// Put them into an array for easy handling
const employees = [emp1, emp2, emp3, emp4];

// Loop through and display details
employees.forEach(emp => {
    console.log(`${emp.name} works in ${emp.department} department with salary ${emp.salary}.`);
});