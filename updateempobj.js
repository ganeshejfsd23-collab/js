let employees = [
    { id: 101, name: "Ganesh", department: "IT", salary: 50000, email: "ganesh@example.com" },
    { id: 102, name: "Ravi", department: "HR", salary: 45000, email: "ravi@example.com" },
    { id: 103, name: "Priya", department: "Finance", salary: 60000, email: "priya@example.com" },
    { id: 104, name: "Kiran", department: "Marketing", salary: 55000, email: "kiran@example.com" }
];

// Update salary for all employees (e.g +5000)
employees.forEach(emp => {
    emp.salary += 5000; // increase salary
    emp.department = emp.department + " Dept"; // append text to department
});

console.log(employees);