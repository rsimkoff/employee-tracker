INSERT INTO department (dept_name, utilized_budget)
VALUES ('Accounting', 45000),
       ('Marketing', 85000),
       ('Human Resources', 35000),
       ('Operations', 100000), 
       ('Repair & Maintenance', 75000),
       ('Legal Disputes', 65000);

INSERT INTO roles (title, salary, department_id) 
VALUES ('Chief Executive Officer', 250000, 4), 
       ('Chief Financial Officer', 200000, 1),
       ('Controller', 150000, 1),  
       ('Staff Account', 65000, 1),
       ('Marketing Manager', 75000, 2),
       ('Human Resource Director', 60000, 3),
       ('Legal Aid', 35000, 6),
       ('Repair & Maintenace Director', 85000, 5);

INSERT INTO employee (first_name, last_name, emp_dept, salary, manager_id, roles_id)
VALUES ('Ryan', 'Wolfhunter', 'Operations', 85000, NULL, 1),
       ('Freddy', 'Spaghetti', 'Operations', 85000, NULL, 2), 
       ('Franklin', 'Gronkowski', 'Accounting', 75000, NULL, 3),
       ('Lauren', 'Flakers', 'Legal Disputes', 50000, 3, 7),
       ('Jason', 'Pretzel', 'Accounting', 80000, 2, 3),
       ('Heather', 'Copperhead', 'Repair & Maintenance', 45000, 1, 8),
       ('Mike', 'Baker', 'Human Resources', 50000, 2, 6),
       ('Patrick', 'Jackson', 'Marketing', 60000, 1, 5),
       ('Kanye', 'Irving', 'Marketing', 65000, 1, 4);
    
INSERT INTO manager (id, mgr_name)
VALUES (1, 'Ryan Wolfhunter'),
       (2, 'Freddy Spaghetti'),
       (3, 'Franklin Gronkowski'); 

SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department_id;
SELECT * FROM manger;