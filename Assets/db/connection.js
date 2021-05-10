const inquirer = require('inquirer');
const mysql =   require('mysql');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',


    password: 'franklinisthebest',
    database: 'employees'
});


connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startApp();




const startApp =() => {
inquirer.prompt({
name: 'menuChoice',
type: 'list',
message: 'please select an option',
choices:[
        "View All Employees?", 
        "View All Employee's By Roles?",
        "View all Emplyees By Deparments", 
        "Update Employee",
        "Add Employee?",
        "Add Role?",
        "Add Department?"
]   

}).then((answer) => {
    switch (answer.menuChoice) {
        case 'View all Departments':
            showAll();
            break;
        case 'View all Employees':
            showAll();
            break;
        case 'View all Emplyees by Department':
            showByDept();
            break;
        case 'View all Employees by Manager':
            showByManager();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Remove Employee':
            removeEmployee();
            break;
        case 'Update Employee Role':
            updateRole();
            break;
        case 'View all Roles':
            viewRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Remove Role':
            removeRole();
            break;
        case 'View all Departments':
            viewDept();
            break;
        case 'Add Department':
            addDept();
            break;
        case 'Remove Department':
            removeDept();
            break;
        case 'Exit':
            connection.end();
            break;
    }
})
}


function viewDepartments() {
connection.query('select id, dept_name, utilitized_budget FROM department'), function (err, res) {}
if (err) throw err;
console.table('Department', res);
runSearch()
}


function addEmployeeEmplFunc(){




};
})

