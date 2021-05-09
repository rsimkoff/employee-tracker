const inquirer = require('inquirer');
const mysql =   require('mysql');
const cTable = require('console.table');
const connection = require('.config/connection');
const startScreen = require('')

const startApp =() => {
inquirer.prompt({
name: 'menuSelection',
type: 'list',
messege: 'please make a selection',
choices:'startScreen'


}).then((answer) => {
    switch (answer.menuChoice) {
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
console.table('Deapartment', res);
runSearch()
}


function addEmployeeEmplFunc(){




};



