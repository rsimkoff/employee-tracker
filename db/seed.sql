INSERT INTO department (name)
VALUES ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
INSERT INTO roles (title, salary, department_id) 
VALUES  ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES ('Ryan', 'Wolfhunter', 1, NULL),
       ('Freddy', 'Spaghetti', 2, 1), 
       ('Franklin', 'Gronkowski', 'G', 3, NULL),
       ('Lauren', 'Flakers', 4, 3),
       ('Jason', 'Pretzel', 5, NULL),
       ('Heather', 'Copperhead', 6, 5),
       ('Mike', 'Baker', 4, 3),
       ('Patrick', 'Jackson', 5, NULL),
       ('Kanye', 'Irving', 6, 5);
    
INSERT INTO manager (id, mgr_name)
VALUES (1, 'Ryan Wolfhunter'),
       (2, 'Freddy Spaghetti'),
       (3, 'Franklin Gronkowski'); 

SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department_id;
SELECT * FROM manger;