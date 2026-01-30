// Array of employee objects
const employees = [
    { id: 101, name: "Ganesh", department: "IT", salary: 50000, email: "ganesh@example.com", phone: "9876543210" },
    { id: 102, name: "Ravi", department: "HR", salary: 45000, email: "ravi@example.com", phone: "9123456780" },
    { id: 103, name: "Priya", department: "Finance", salary: 60000, email: "priya@example.com", phone: "9988776655" },
    { id: 104, name: "Kiran", department: "Marketing", salary: 55000, email: "kiran@example.com", phone: "9090909090" }
];

// Display all employees
employees.forEach(emp => {
    console.log(`ID: ${emp.id}, Name: ${emp.name}, Dept: ${emp.department}, Salary: ${emp.salary}, Email: ${emp.email}, Phone: ${emp.phone}`);
});