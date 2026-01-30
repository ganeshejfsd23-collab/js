// Employee objects
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

// Add new properties dynamically
emp1.email = "ganesh@example.com";
emp1["phone"] = "9876543210";

emp2.email = "ravi@example.com";
emp2["phone"] = "9123456780";

emp3.email = "priya@example.com";
emp3["phone"] = "9988776655";

emp4.email = "kiran@example.com";
emp4["phone"] = "9090909090";
// Print all employees
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);